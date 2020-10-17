import React from "react";
import "./map.css";

export default function Map() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Map"
            width="100%"
            height="475px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=chitrakut%20socity&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          {/* <a href="https://www.whatismyip-address.com"></a> */}
        </div>
      </div>
    </div>
  );
}
