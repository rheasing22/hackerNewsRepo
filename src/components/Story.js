import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import Comments from "./Comments";

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);
export default function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
    console.log(story.kids);
    //eslint-disable react-hooks/exhaustive-deps
  }, []);

  const { id, by, title, kids, time, url } = story;

  return (
    <>
      <div className="story">
        <div className="story-title">
          <Link url={url} title={title} />
        </div>
        <div className="story-info">
          <span>
            by{" "}
            <Link
              url={`https://news.ycombinator.com/user?id=${by}`}
              title={by}
            />
          </span>
          |
          <span>
            {new Date(time * 1000).toLocaleDateString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          |
          <span>
            <Link
              url={`https://news.ycombinator.com/item?id=${id}`}
              title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
            />
          </span>
        </div>
      </div>
      <Comments comments={story.kids} />
    </>
  );
}
