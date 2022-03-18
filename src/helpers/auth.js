import { defaultClient } from "./client";

export const login = async (credentials) =>
  defaultClient.post("/login", {
    user: {
      email: credentials.email,
      password: credentials.password,
    },
  });