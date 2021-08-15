import React, { useEffect, useState } from "react";
import { getStory } from "../services/hnApi";
import Comments from "./Comments";
import { Link } from "react-router-dom";

const Link1 = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);
export default function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
    console.log(story.kids);
    //eslint-disable-next-line
  }, []);

  const { id, by, title, kids, time, url } = story;

  return (
    <>
      <Link to={`/story/${storyId}`}>
        <div className="story">
          <div className="story-title">
            <Link1 url={url} title={title} />
          </div>
          <div className="story-info">
            <span>
              by{" "}
              <Link1
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
              <Link1
                url={`https://news.ycombinator.com/item?id=${id}`}
                title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
              />
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
