import React, { useState, useEffect } from "react";
import { getCommentItem } from "../services/hnApi";
import { Markup } from "interweave";
import PropTypes from "prop-types";

function Comment({ commentId }) {
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

Comment.propTypes = {
  commentId: PropTypes.number.isRequired,
};

export default Comment;
