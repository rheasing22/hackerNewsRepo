import React, { useEffect } from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Comments({ getStoryForComment, storyForComment, loading, match }) {
  useEffect(() => {
    getStoryForComment(match.params.id);

    //eslint-disable-next-line
  }, []);

  let { kids } = storyForComment;

  if (loading) {
    return <Loading />;
  } else if (kids !== undefined) {
    return (
      <>
        <div className="header-comments">
          <Link to="/" className="btn">
            <button>Back To Home</button>
          </Link>
          <h1>Top 20 Comments</h1>
        </div>

        {kids.slice(0, 20).map((commentId) => (
          <Comment key={commentId} commentId={commentId} />
        ))}
      </>
    );
  } else {
    return <div>undefined</div>;
    // return null;
  }
}
Comments.propTypes = {
  getStoryForComment: PropTypes.func.isRequired,
  storyForComment: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Comments;
