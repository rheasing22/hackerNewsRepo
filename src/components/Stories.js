import React from "react";
import Story from "../components/Story";

function Stories({ storyIds }) {
  return (
    <div>
      <h1>Top 10 Stories</h1>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
}

export default Stories;
