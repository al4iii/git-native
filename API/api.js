import axios from "axios";

const instanse = axios.create({
  baseURL: "https://api.github.com/",
});

export const usersAPI = {
  getUser: (user) => {
    return instanse
      .get(`users/${user}`)
      .then((response) => response)
      .catch((error) => {
        return error.response;
      });
  },
  getRepos: (currentPage, pageSize, user) => {
    return instanse
      .get(`users/${user}/repos?page=${currentPage}&per_page=${pageSize}`)
      .then((response) => response.data);
  },
  getReposLength: (user) => {
    return instanse
      .get(`users/${user}`)
      .then((response) => response.data.public_repos);
  },
};
