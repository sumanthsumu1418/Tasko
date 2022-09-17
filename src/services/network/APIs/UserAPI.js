import axiosAPI from '../AxiosApi';

export const getUsersList = () => {
  return axiosAPI.get('/users');
};

export const getUsersByID = userID => {
  return axiosAPI.get(`user/${userID}`);
};

export const addNewUser = params => {
  return axiosAPI.post(`users`, params);
};
