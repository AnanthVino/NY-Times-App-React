/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.nytimes.com/svc/";
const API_KEY = "6K7TmGn9NO8gpWncnOkQSAV3kwUvtl05"

const getTopStories = (value) => {
  return axios
    .get(`${API_URL}topstories/v2/${value}.json?api-key=${API_KEY}`, {
      header : authHeader()
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error)
    })
};

const getSearchArticles = (value, searchArticle) => {
  return axios
    .get(`${API_URL}search/v2/articlesearch.json?&q=${searchArticle}&fq=news_desk:(${value})&sort=newest&api-key=${API_KEY}`, {
      header : authHeader()
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error)
    })
};

const getReaderComments = (comment_url) => {
  return axios
    .get(`svc/community/v3/user-content/url.json?api-key=${API_KEY}&offset=0&url=${comment_url}`, {
      header : authHeader()
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error)
  })
};

const exportData = {
  getTopStories,
  getSearchArticles,
  getReaderComments
}

export default exportData;
