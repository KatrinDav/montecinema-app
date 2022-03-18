import Vue from 'vue'
import Vuex from 'vuex'
import {getMovies, getScreenings} from '../helpers/index';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [],
  },
  mutations: {
    setMovies(state, movies){
      state.movies = movies;
    },
    setScreenings(state, screenings){
      state.screenings = screenings;
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

  },
  getters: {
    movie: (state) => (movieId) => {
      return state.movies.find(movie => movie.id === movieId)
    },
    movies: (state) => state.movies,

    genres: (state) => {
      return state.movies.map((movie) => movie.genre)
    },

    uniqeGenres: (state, getters) => {
      let uniq = {};
      return getters.genres.filter(
        (item) => !uniq[item.id] && (uniq[item.id] = true)
      );
    }

  },
    
})
