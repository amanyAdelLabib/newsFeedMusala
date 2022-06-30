import axios from 'axios';
const BASE_URL =
  'https://newsapi.org/v2/everything';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

  /*********************** get news feed api  **************************************************/
 export const  GetNewsFeed = ()=> {
    return apiClient
      .get(`?q=Apple&apiKey=3b3bd5c8e81a454d9035794b4db8d8ee`)
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
  }

