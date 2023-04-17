import React from "react";
import PropTypes from "prop-types";

function Timeline(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.timelineTweet}</p>
    </React.Fragment>
  );
}

Timeline.propTypes = {
  name: PropTypes.string.isRequired,
  timelineTweet: PropTypes.string
};

export default Timeline;