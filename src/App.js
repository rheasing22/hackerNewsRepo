import Stories from "./components/Stories";
import { getStoryIds } from "./services/hnApi";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "./components/Comments";
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoryUrl = `${baseUrl}topstories.json`;
const storyUrl = `${baseUrl}item/`;

function App() {
  const [storyIds, setStoryIds] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));

    //eslint-disable-next-line
  }, []);

  const getComment = async (storyId) => {
    const res = await axios.get(`${storyUrl + storyId}.json`);
    setComment(res.data);
  };

  console.log(storyIds);
  return (
    <Router>
      <div>
        <p>hello</p>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Stories storyIds={storyIds} />}
          />
          <Route
            exact
            path="/story/:id"
            render={(props) => (
              <Comments {...props} getComment={getComment} comment={comment} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
