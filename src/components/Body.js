import React from "react";
import TimelineDetails from "./TimelineDetails";
import Suggested from "./Suggested";

function Body() {
  return (
    <React.Fragment>
      <TimelineDetails/>
      <h2>People you may know:</h2>
      <Suggested/>
    </React.Fragment>
  );
}

export default Body;