import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axiosClient.defaults.headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export const getRequest = (URL) => {
	return axiosClient.get(`${URL}`).then((response) => response);
};

export const postRequest = (URL, payload) => {
	return axiosClient.post(`${URL}`, payload).then((response) => response);
};

export const patchRequest = (URL, payload) => {
	return axiosClient.patch(`${URL}`, payload).then((response) => response);
};

export const deleteRequest = (URL) => {
	return axiosClient.delete(`${URL}`).then((response) => response);
};
