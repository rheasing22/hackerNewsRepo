import Stories from "./components/Stories";
import { getStoryIds } from "./services/hnApi";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comments from "./components/Comments";
const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}item/`;

function App() {
  const [storyIds, setStoryIds] = useState([]);
  const [storyForComment, setStoryForComment] = useState({});

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));

    //eslint-disable-next-line
  }, []);

  const getStoryForComment = async (storyId) => {
    const res = await axios.get(`${storyUrl + storyId}.json`);
    setStoryForComment(res.data);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Stories storyIds={storyIds} />}
          />
          <Route
            exact
            path="/:id"
            render={(props) => (
              <Comments
                {...props}
                getStoryForComment={getStoryForComment}
                storyForComment={storyForComment}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
