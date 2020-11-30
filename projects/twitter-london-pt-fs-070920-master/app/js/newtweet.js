import API from "./API.js";
const API_ENDPOINT = "http://localhost:3000";
const submitTweet = document.querySelector(".new_tweet_submit");
const tweetText = document.querySelector(".new_tweet_text");

const userLoggedInName = localStorage.UserLoggedInName;
const profileName = document.querySelector(".profile_name");
profileName.innerHTML = userLoggedInName;

const userLoggedInPic = localStorage.UserLoggedInAvatar;
const profilePic = document.querySelector(".avatar_wrapper img");
profilePic.src = userLoggedInPic;

const totalNumberOfTweets = async () => {
  return await API.getTweets().then((data) => {
    const tweets = data.filter((el) => el);
    return tweets.length + 1;
  });
};

const addANewTweet = async () => {
  return await {
    id: await totalNumberOfTweets(),
    userId: parseInt(localStorage.UserLoggedInId),
    content: tweetText.value,
    likes: 0,
    retweets: 0,
    date: new Date().toDateString(),
  };
};

const postTweet = async (tweet) => {
  const postIt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tweet),
  };
  return await fetch(API_ENDPOINT + "/tweets", postIt)
    .then((response) => response.json())
    .catch(() => "Oops something went wrong!");
};

submitTweet.addEventListener("click", async (event) => {
  const newTweet = await addANewTweet();
  console.log(newTweet);
  postTweet(newTweet);
  window.location.href = "mainfeed.html";
});
