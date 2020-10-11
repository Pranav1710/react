import React from "react";
import {Link} from 'react-router-dom';
export const Broadcrumb = () => {
  let url = window.location.pathname;
  // let temp = url.replace('/','')
  let name = url.split("/");

  url = name.join(" > ")
  return (
    <div className="breadcrumb">
      <div className="container clearfix">
        <h4>{name[name.length - 1]}</h4>
        <h6>
          <Link to='/' className='blink'><i className="fa fa-home" style={{paddingRight: "1px"}} aria-hidden="true"></i> Home </Link>
          {url}
        </h6>
      </div>
    </div>
  );
};
export default Broadcrumb;
