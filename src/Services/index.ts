import axios from 'axios';
import {Category} from '../Constants';

const BASE_URL = 'https://newsapi.org/v2/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

/*********************** get news feed api  **************************************************/
export const GetNewsFeed = (category: string = Category.health,pageSize: number = 5) => {
  return apiClient
    .get(
      `top-headlines?category=${category}&apiKey=3b3bd5c8e81a454d9035794b4db8d8ee&pageSize=${pageSize}`,
    )
    .then(res => {
      console.log('get news feed api');
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log('in login class catch err');
      console.log(err);
      console.log(err.response.data);
      return err;
    });
};

/*********************** search news feed api  **************************************************/
export const SearchNews = (searchWord: string = '') => {
  return apiClient
    .get(
      `everything?q=${searchWord}&apiKey=3b3bd5c8e81a454d9035794b4db8d8ee`,
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      console.log(err.response.data);
      return err;
    });
};
