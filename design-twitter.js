'use strict';

const assert = require('assert');

class Twitter {
  constructor() {
    this.tweets = [];
    this.userToFollowersMap = {};
    this.userToSubscribersMap = {};
  }
  ensureUsersAreCreated(userIds) {
    userIds.forEach((userId) => {
      const { userToSubscribersMap, userToFollowersMap } = this;

      if (!userToSubscribersMap[userId]) {
        userToSubscribersMap[userId] = new Set();
      }

      if (!userToFollowersMap[userId]) {
        userToFollowersMap[userId] = new Set();
      }
    });
  }
  follow(userId, userToFollowId) {
    const { userToFollowersMap, userToSubscribersMap } = this;
    
    this.ensureUsersAreCreated([userId, userToFollowId]);

    userToFollowersMap[userId].add(userToFollowId);
    userToSubscribersMap[userToFollowId].add(userId);
  }
  unfollow(userId, userToUnfollowId) {
    const { userToFollowersMap, userToSubscribersMap } = this;

    this.ensureUsersAreCreated([userId, userToUnfollowId]);

    userToFollowersMap[userId].delete(userToUnfollowId);
    userToSubscribersMap[userToUnfollowId].delete(userId);
  }
  postTweet(userId, tweetId) {
    this.ensureUsersAreCreated([userId]);
    this.tweets.unshift({ tweetId, userId });
  }
  getNewsFeed(userId) {
    const { userToFollowersMap, tweets } = this;

    this.ensureUsersAreCreated([userId]);

    const followers = userToFollowersMap[userId];

    const newsFeed = [];
    let i = 0;

    while (newsFeed.length < 10 && i < tweets.length) {
      const tweet = tweets[i];
      if (tweet.userId === userId || followers.has(tweet.userId)) {
        newsFeed.push(tweet.tweetId);
      }

      i++;
    }

    return newsFeed;
  }
}

const twitter = new Twitter;
[[1, 5], [1, 3], [1, 101], [1, 13], [1, 10], [1, 2], [1, 94], [1, 505], [1, 333], [1, 22]].forEach(([userId, tweetId]) => {
  twitter.postTweet(userId, tweetId);
});
const f1 = twitter.getNewsFeed(1);
console.log(f1);
// twitter.postTweet(1, 5)
// twitter.postTweet(1, 3)
// twitter.postTweet(1, 101)
console.log(f1);

// twitter.follow(2, 1);
// twitter.postTweet(2, 6);
// console.log(twitter.userToNewsFeedMap[1]);
// twitter.unfollow(1, 2);
// const f2 = twitter.getNewsFeed(1); 
// console.log(f2);