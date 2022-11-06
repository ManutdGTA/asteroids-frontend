import axios from "axios";

export const getMiners = (params) =>
  axios.get("/miners", {
    params: params,
  });
export const getMinersByPlanet = (params) =>
  axios.get("/miners?planetId=" + params, {});
export const getMinerDetail = (params) => axios.get("/miners/" + params, {});

export const postMiners = (params) =>
  axios.post("/miners", {
    params: params,
  });
export const putMiners = (params) =>
  axios.put("/miners/1", {
    params: params,
  });
export const deleteMiners = (params) =>
  axios.delete("/miners/1", {
    params: params,
  });
export const getAsteroids = (params) =>
  axios.get("/asteroids", {
    params: params,
  });
export const getPlanets = (params) =>
  axios.get("/planets", {
    params: params,
  });
