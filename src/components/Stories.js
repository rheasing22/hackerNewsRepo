import React from "react";
import Story from "../components/Story";
import Loading from "../components/Loading";
import PropTypes from "prop-types";

function Stories({ storyIds, loading }) {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1>Top 10 Stories</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </div>
    );
  }
}

Stories.propTypes = {
  storyIds: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Stories;
