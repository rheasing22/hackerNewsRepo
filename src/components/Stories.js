import React from "react";

import Story from "../components/Story";

function Stories({ storyIds }) {
  return (
    <div>
      {storyIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
}

export default Stories;
