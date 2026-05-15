import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// GET ACTIVITIES
export const getActivities = async () => {

  const res = await API.get("/activities");

  return res.data;
};


// ADD ACTIVITY
export const addActivity = async (data) => {

  const res = await API.post(
    "/activities",
    data
  );

  return res.data;
};

// DELETE ACTIVITY
export const deleteActivity = async (id) => {

  const res = await API.delete(
    `/activities/${id}`
  );

  return res.data;
};

// SUMMARY
export const getSummary = async () => {

  const res = await API.get("/summary");

  return res.data;
};

export default API;