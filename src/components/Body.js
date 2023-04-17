import React from "react";
import Profile from "./Profile";
import TimelineDetails from "./TimelineDetails";
import Suggested from "./Suggested";

function Body() {
  return (
    <React.Fragment>
      <Profile/>
      <TimelineDetails/>
      <h2>People you may know:</h2>
      <Suggested/>
    </React.Fragment>
  );
}

export default Body;