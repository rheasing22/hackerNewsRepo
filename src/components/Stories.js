import React from "react";
import Story from "../components/Story";
import Loading from "../components/Loading";

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

export default Stories;
