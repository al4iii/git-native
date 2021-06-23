import { usersAPI } from "../API/api";

const SET_USERS = "users/SET_USERS";
const TOGGELE_IS_FETCHING = "users/TOGGELE_IS_FETCHING";
const SET_REPOS = "users/SET_REPOS";
const SET_IS_FOUND = "users/SET_IS_FOUND";
const SET_USER_NAME = "users/SET_USER_NAME";
const SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const REMOVE_USER = "users/REMOVE_USERS";

let initialState = {
  userName: null,
  userProfile: null,
  repos: [],
  toggleIsFetching: false,
  pageSize: 4,
  totalCount: 0,
  currentPage: 1,
  isFound: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, userProfile: action.userProfile };
    case SET_REPOS:
      return { ...state, repos: action.repos };
    case TOGGELE_IS_FETCHING:
      return {
        ...state,
        toggleIsFetching: action.isFetching,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_IS_FOUND:
      return {
        ...state,
        isFound: action.isFound,
      };
    case REMOVE_USER:
      return {
        ...state,
        userName: "000",
        userProfile: null,
        repos: [],
        toggleIsFetching: false,
        pageSize: 4,
        totalCount: 0,
        currentPage: 1,
        isFound: null,
      };
    default:
      return state;
  }
};

export const setUserProfile = (userProfile) => ({
  type: SET_USERS,
  userProfile,
});
export const removeUser = () => ({ type: REMOVE_USER });
export const setRepos = (repos) => ({ type: SET_REPOS, repos });
export const setUserName = (userName) => ({ type: SET_USER_NAME, userName });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGELE_IS_FETCHING,
  isFetching,
});
export const setTotalReposCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setCurrentPages = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setIsFound = (isFound) => ({ type: SET_IS_FOUND, isFound });

export const getUsers = (user) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setUserName(user));
  let response = await usersAPI.getUser(user);
  if (response.status === 200) {
    dispatch(setIsFound(true));
    dispatch(setUserProfile(response.data));
    const currentPage = initialState.currentPage;
    const pageSize = initialState.pageSize;
    dispatch(getRepos(currentPage, pageSize, user));
    dispatch(getReposLength(user));
    dispatch(setCurrentPages(currentPage));
    dispatch(toggleIsFetching(false));
  } else if (response.status === 404) {
    dispatch(setIsFound(false));
    dispatch(toggleIsFetching(false));
  }
};

export const getRepos =
  (
    currentPage,
    pageSize = initialState.pageSize,
    user = initialState.userName
  ) =>
  async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPages(currentPage));
    let response = await usersAPI.getRepos(currentPage, pageSize, user);
    dispatch(setRepos(response));
    dispatch(toggleIsFetching(false));
  };

export const getReposLength = (userName) => async (dispatch) => {
  let response = await usersAPI.getReposLength(userName);
  dispatch(setTotalReposCount(response));
};

export default usersReducer;
