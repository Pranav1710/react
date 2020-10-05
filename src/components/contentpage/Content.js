import React from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Home";
import ContactUs from "./ContactUs";
import Company from "./Company";
import ECatalog from "./ECatalog";
import Exports from "./Exports";
import FloorTiles from "./products/FloorTiles";
import WallTiles from "./products/WallTiles";
import ParkingTiles from "./products/ParkingTiles";
import SanateryWare from "./products/SanateryWare";


export default function Content() {
  return (
    <div id="content">
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/exports" component={Exports} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/e-catalog" component={ECatalog} />
        <Route exact path="/products/floor-tiles" component={FloorTiles} />
        <Route exact path="/products/wall-tiles" component={WallTiles} />
        <Route exact path="/products/sanetery-ware" component={SanateryWare} />
        <Route exact path="/products/parking-tiles" component={ParkingTiles} />
      </Switch>
    </div>
  );
}
