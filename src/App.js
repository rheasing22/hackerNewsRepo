import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Stories from "./components/Stories";
import { getStoryIds } from "./services/hnApi";
import Comments from "./components/Comments";
import NotFound from "./components/NotFound";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}item/`;

function App() {
  const [storyIds, setStoryIds] = useState([]);
  const [storyForComment, setStoryForComment] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStoryIds().then((data) => setStoryIds(data));
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  const getStoryForComment = async (storyId) => {
    setLoading(true);
    const res = await axios.get(`${storyUrl + storyId}.json`);
    setStoryForComment(res.data);
    setLoading(false);
  };

  return (
    <Router basename="hackerNews">
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Stories storyIds={storyIds} loading={loading} />}
          />
          <Route
            exact
            path="/:id"
            render={(props) => (
              <Comments
                {...props}
                getStoryForComment={getStoryForComment}
                storyForComment={storyForComment}
                loading={loading}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
