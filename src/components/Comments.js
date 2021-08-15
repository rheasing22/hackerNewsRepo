import React from "react";

export default function Comments({ comments }) {
  return (
    <div>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}
