import React from "react";
import "./map.css";

export default function Map() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="475px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=blue%20international%20morbi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
