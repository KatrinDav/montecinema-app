import Vue from 'vue'
import Vuex from 'vuex'
import {getMovies, getScreenings} from '../helpers/index';
import * as authApi from '../helpers/auth';
import { setAuthHeader,removeAuthHeader } from '@/helpers/client';

const AUTH_HEADER_STORAGE_KEY = 'auth-header';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [],
    authHeader: null,
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies;
    },
    setScreenings(state, screenings){
      state.screenings = screenings;
    },
    setAuthHeader(state, {authHeader}){
      state.authHeader = authHeader;
      localStorage.setItem(AUTH_HEADER_STORAGE_KEY, authHeader)
    },
    resetAuthHeader(state){
      state.authHeader = null;
      localStorage.removeItem(AUTH_HEADER_STORAGE_KEY);
    }
  },
  actions: {
    async fetchMovies({ commit }) {
      const { data } = await getMovies();
      commit('setMovies', data);
      console.log(data)
    },
    async fetchScreenings({ commit }) {
      const { data } = await getScreenings();
      commit('setScreenings', data);
      console.log(data)
    },

    async login({commit, dispatch}, credentials){
     await dispatch("logout");
     const response = await authApi.login(credentials);
     const authHeader = response.headers["authorization"];
     setAuthHeader(authHeader);
      commit("setAuthHeader", {authHeader})
    },

    logout({commit, getters}){
      if(!getters.isLoggedIn) return;
      removeAuthHeader();
      commit("resetAuthHeader")
    },
    restoreAuthSession({commit}){
      const authHeader = localStorage.getItem(AUTH_HEADER_STORAGE_KEY);
      if(authHeader){
        setAuthHeader(authHeader);
        commit("setAuthHeader", {authHeader})
      }
    }

  },
  getters: {
    movie: (state) => (movieId) => {
      return state.movies.find(movie => movie.id === movieId)
    },
    isLoggedIn: (state) => !!state.authHeader,
  },

})
