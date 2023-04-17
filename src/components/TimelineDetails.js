import React from "react";
import Timeline from "./Timeline";
import TweetBar from "./TweetBar";

const mainTimelineList = [
  {
    name: 'Erin',
    timelineTweet: 'Boyfriend, doing CEs for well drilling; Me, reading homework for React; Us, Eating Nachos; Happy Sunday'
  },
  {
    name: 'Luckie',
    timelineTweet: 'you guys ready for the most nauseating week of your lives'
  },
  {
    name: 'Sarah',
    timelineTweet: 'Another digital woodcut, St Sophia\'s bell tower.'
  },
];

function TimelineDetails(){
  return (
    <React.Fragment>
      <TweetBar/>
      {mainTimelineList.map((timeline, index) =>
        <Timeline name = {timeline.name}
        timelineTweet = {timeline.timelineTweet}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default TimelineDetails;