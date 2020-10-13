import React from "react";
import "./map.css";
export default function Map() {
  return (
    <>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="1080"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=chitrakut%20socity&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.whatismyip-address.com/divi-discount/"></a>
        </div>
      </div>
    </>
  );
}
