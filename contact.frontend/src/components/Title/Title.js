import React from "react";

export default function Title({title}) {
  return (
      <div className="title-bar">
        <h1 className="title">{title}</h1>
      </div>
  );
}
