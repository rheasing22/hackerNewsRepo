import axios from "axios";
export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const topStoryUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const res = await axios.get(`${storyUrl + storyId}.json`);
  return res.data;
};
export const getStoryIds = async () => {
  const res = await axios.get(topStoryUrl);
  return res.data.slice(0, 10);
};

export const getCommentItem = async (commentId) => {
  const res = await axios.get(`${storyUrl + commentId}.json`);
  return res.data;
};
