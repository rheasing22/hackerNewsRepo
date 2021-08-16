import React, { useEffect } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Comments({ getStoryForComment, storyForComment, match }) {
  useEffect(() => {
    getStoryForComment(match.params.id);

    //eslint-disable-next-line
  }, []);

  let { kids } = storyForComment;

  if (kids !== undefined) {
    return (
      <>
        <div className="header-comments">
          <Link to="/" className="btn">
            <button>Back To Home</button>
          </Link>
          <h1>Top 20 Comments</h1>
        </div>

        {kids.map((commentId) => (
          <Comment key={commentId} commentId={commentId} />
        ))}
      </>
    );
  } else {
    return null;
  }
}
Comments.propTypes = {
  getStoryForComment: PropTypes.func.isRequired,
  storyForComment: PropTypes.object.isRequired,
};

export default Comments;
