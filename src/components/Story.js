import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import { Link } from "react-router-dom";

export default function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));

    //eslint-disable-next-line
  }, []);

  const { title, kids, url } = story;

  return (
    <>
      <div className="story">
        <div className="story-title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <div className="story-info">
          <Link to={`/${storyId}`}>Comments</Link>
          <span id="noOfComments">{`${
            kids && kids.length > 0 ? kids.length : 0
          } comments`}</span>
        </div>
      </div>
    </>
  );
}
