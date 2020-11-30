import API from "./API.js";
const API_ENDPOINT = "http://localhost:3000";
let tweets = {};

const writeTweet = document.querySelector(".write_tweet");
const userLoggedInName = localStorage.UserLoggedInName;
const profileName = document.querySelector(".profile_name");
profileName.innerHTML = userLoggedInName;

writeTweet.addEventListener("click", () => {
  window.location.href = "newtweet.html";
});

const userLoggedInPic = localStorage.UserLoggedInAvatar;
const profilePic = document.querySelector(".avatar_wrapper img");
profilePic.src = userLoggedInPic;

const profilePicChange = document.getElementById("upload");
profilePicChange.addEventListener("change", (event) => {
  console.log("clicked");
  let reader = new FileReader();
  reader.onload = () => {
    console.log(reader);
    profilePic.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

const tweetFeed = document.querySelector(".tweets_feed");
tweetFeed.innerHTML = "";

const localUserId = localStorage.UserLoggedInId;

const totalNumberOfComments = async () => {
  return await API.getComments().then((data) => {
    const comments = data.filter((el) => el);
    return comments.length + 1;
  });
};

const addANewComment = async (tweet) => {
  const commentValue = document.querySelector(`.tweet_${tweet.id}_comment`);
  return await {
    id: await totalNumberOfComments(),
    userId: parseInt(localStorage.UserLoggedInId),
    tweetId: tweet.id,
    content: commentValue.value,
    date: new Date().toDateString(),
  };
};

const postComment = async (comment) => {
  const postIt = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  };
  return await fetch(API_ENDPOINT + "/comments", postIt)
    .then((response) => response.json())
    .catch(() => "Oops something went wrong!");
};

const addEventListenersToTweet = (tweetId) => {
  const tweetLike = document.querySelector(
    `.tweeter_footer_${tweetId.id} .tweeter_likes`
  );
  tweetLike.addEventListener("click", (event) => {
    tweetId.likes = tweetId.likes + 1;
    tweetLike.innerHTML = `<img src="images/heart_liked.svg"/>${tweetId.likes}`;
  });

  const tweetRetweet = document.querySelector(
    `.tweeter_footer_${tweetId.id} .tweeter_retweets`
  );
  tweetRetweet.addEventListener("click", (event) => {
    tweetId.retweets = tweetId.retweets + 1;
    tweetRetweet.innerHTML = `<img src="images/retweet_clicked.svg"/>${tweetId.retweets}`;
  });

  const tweetComment = document.querySelector(
    `.tweeter_footer_${tweetId.id} .tweeter_comments`
  );

  tweetComment.addEventListener("click", (event) => {
    const tweetToComment = document.querySelector(`.tweet_${tweetId.id}`);
    const newComment = document.createElement("div");
    newComment.classList = `comment_tweet tweet_${tweetId.id}`;
    newComment.innerHTML = `<input class="tweet_${tweetId.id}_comment" placeholder="What is on your mind...">
    <button class="tweet_comment_submit">Send</button>`;
    tweetToComment.appendChild(newComment);
    const sendComment = document.querySelector(`.tweet_comment_submit`);
    sendComment.addEventListener("click", async (event) => {
      const newTweetComment = await addANewComment(tweetId);
      console.log(newTweetComment);
      await postComment(newTweetComment);
      window.location.href = "mainfeed.html";
    });
  });
};

const displayTweet = (tweetId) => {
  const newTweet = document.createElement("div");
  newTweet.classList = `tweet_${tweetId.id}`;
  newTweet.innerHTML = `<div class="tweet_header">
                    <div class="tweet_username">${tweetId.user.name}</div>
                    <div class="tweet_datepost">${tweetId.date}</div>
                </div>
                <div class="tweeter_body">${tweetId.content}</div>
                <div class="tweeter_footer tweeter_footer_${tweetId.id}">
                    <div class="tweeter_likes tweeter_footer_element">
                        <img src="images/heart.svg"/>${tweetId.likes}</div>
                    <div class="tweeter_retweets tweeter_footer_element">
                        <img src="images/retweet.svg"/>${tweetId.retweets}</div>
                    <div class="tweeter_comments tweeter_footer_element">
                        <img src="images/comment.svg"/>${tweetId.comments.length}</div>
                </div>`;
  tweetFeed.appendChild(newTweet);
};

const displayUserTweets = () => {
  API.getTweets().then((data) => {
    tweets = data.filter((el) => el.userId === parseInt(localUserId));
    tweets.forEach((tweet) => {
      displayTweet(tweet);
      addEventListenersToTweet(tweet);
    });
    return tweets;
  });
};

displayUserTweets();
