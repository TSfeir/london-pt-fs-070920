const API_ENDPOINT = "http://localhost:3000";
const USERS_URL = `${API_ENDPOINT}/users?_embed=tweets`;
const TWEETS_URL = `${API_ENDPOINT}/tweets?_expand=user&_embed=comments`;
const COMMENTS_URL = `${API_ENDPOINT}/comments`;

const getTweets = async () => {
  return await fetch(TWEETS_URL).then((res) => res.json());
};

const getComments = async () => {
  return await fetch(COMMENTS_URL).then((res) => res.json());
};

let allTweetUsers = [];
const getUsers = () => {
  return fetch(USERS_URL).then((user) => user.json());
};

export default {
  getTweets,
  getUsers,
  getComments,
  allTweetUsers,
};

// node module.exports = {}
// browser export default {}
