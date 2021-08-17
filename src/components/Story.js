import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Story({ storyId }) {
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
          <span id="noOfComments">
            {kids && kids.length > 0 ? (
              <Link to={`/${storyId}`}>Comments</Link>
            ) : (
              "No comments"
            )}
          </span>
        </div>
      </div>
    </>
  );
}

Story.propTypes = {
  storyId: PropTypes.number.isRequired,
};

export default Story;
