import React from "react";

export const Broadcrumb = () => {
  let url =  window.location.pathname;
  // let temp = url.replace('/','')
  console.log('hii there');
  return (
    <div className="breadcrumb">
      <div className="container">
        <h4>{url}</h4>
      </div>
    </div>
  );
}
export default Broadcrumb;
