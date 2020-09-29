import React from "react";

export default function Broadcrumb() {
  let url =  window.location.pathname;
  return (
    <div className="breadcrumb">
      <div className="container">
        <h4>{url}</h4>
      </div>
    </div>
  );
}
