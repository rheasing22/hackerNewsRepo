import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import Story from "../components/Story";
function Stories() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    // getStory(20970623).then((data) => console.log(data));
  }, []);
  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
}

export default Stories;
