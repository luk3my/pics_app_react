import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1bccb78e36438348b614a8dbfbdf0ae85db5cd70b92a86020ea172a737c0607a'
  }

});
