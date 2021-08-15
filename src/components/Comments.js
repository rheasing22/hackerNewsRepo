import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Comments({ getCommentIds, match }) {
  useEffect(() => {
    getCommentIds(match.params.id);
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <p>hello</p>
    </div>
  );
}
