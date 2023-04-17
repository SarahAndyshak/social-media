import React from "react";
import Timeline from "./Timeline";

const userProfile = [
  {
    name: "Brishna"
  }
]

function Profile(){
  return(
    <React.Fragment>
      {userProfile.map((timeline, index) =>
      <Timeline name = {timeline.name}
      key={index}/>
      )}
      <p>Tweets! | Following! | Followers!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </React.Fragment>
  );
}

export default Profile;