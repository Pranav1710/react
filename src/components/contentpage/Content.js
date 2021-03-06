import React from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Home";
import ContactUs from "./ContactUs";
import Company from "./Company";
import FloorTiles from "./products/FloorTiles";
import WallTiles from "./products/WallTiles";
import ParkingTiles from "./products/ParkingTiles";
import SanateryWare from "./products/SanateryWare";


export default function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact={true} path="/" component={home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/company" component={Company} />
        <Route exact={true} path="/products/floor-tiles" render={(match)=>( <FloorTiles size={match}/>)} />
        <Route exact={true} path="/products/floor-tiles/:type" render={(match)=>( <FloorTiles size={match}/>)} />
        <Route path="/products/floor-tiles/:type/:size" render={(match)=>( <FloorTiles size={match}/>)} />
        <Route exact={true} path="/products/wall-tiles" render={(match)=>( <WallTiles size={match}/>)} />
        <Route path="/products/wall-tiles/:size" render={(match)=>( <WallTiles size={match}/>)} />
        <Route path="/products/sanetery-ware" component={SanateryWare} />
        <Route exact={true} path="/products/parking-tiles" render={()=>( <ParkingTiles size={null}/>)} />
        <Route path="/products/parking-tiles/:size" render={(match)=>( <ParkingTiles size={match}/>)} />
      </Switch>
    </div>
  );
}
