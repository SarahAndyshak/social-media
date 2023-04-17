import React from "react";
import Timeline from "./Timeline";

const suggestedFriends = [
  {
    name: "Molly", 
  },
  {
    name: "John",
  }
]

// Original code, without button after each name:

// function Suggested(){
//   return (
//     <React.Fragment>
//     {suggestedFriends.map((timeline, index) => // need to add a button into this, probably map it in?
//       <Timeline name = {timeline.name}
//       key={index}/>
//       )}
//     </React.Fragment>
//   );
// }


// to add button after each friend, put key index in div

function Suggested(){
  return (
    <React.Fragment>
      {suggestedFriends.map((friend, index) => (
        <div key={index}> 
          <Timeline name={friend.name} />
          <button>Add Friend!</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Suggested;