import axios from "axios";

export const getProjects = async () => {
  const { data } = await axios.get("/api/projects");

  return data;
};

export const getProjectById = async id => {
  const { data } = await axios.get(`/api/projects/${id}`);

  return data;
};
