import React, { useState, useEffect } from "react";
import { getCommentItem } from "../services/hnApi";
import { Markup } from "interweave";

export default function Comment({ commentId }) {
  const [commentItem, setCommentItem] = useState({});
  useEffect(() => {
    getCommentItem(commentId).then((data) => data && setCommentItem(data));

    //eslint-disable-next-line
  }, []);

  const { by, text } = commentItem;
  if (!text || !by) {
    return null;
  } else {
    return (
      <div className="story">
        <div className="story-title">{by}</div>
        <div className="story-info">
          <Markup content={text} />
        </div>
      </div>
    );
  }
}
