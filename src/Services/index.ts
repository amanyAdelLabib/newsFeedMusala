import axios from 'axios';
const BASE_URL =
  'https://newsapi.org/v2/everything?q=Apple&apiKey=3b3bd5c8e81a454d9035794b4db8d8ee';

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   timeout: 10000,

// });

export default class UserApi {
  constructor() {
    this.apiUrl = 'https://newsapi.org/v2/everything';
  }

  init() {
    console.log('url  >>>>>>>>' + urlInit);
    this.headers = {'Content-Type': 'application/json'};
    this.client = axios.create({
      baseUrl: this.apiUrl,
      timeout: 10000,
      headers: this.headers,
    });
    return this.client;
  }

  /*********************** get news feed api  **************************************************/
  GetNewsFeed() {
    return this.init()
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
}
