import React from "react";

const Profile = () => {
  let name = "Ademola";
  let role = "developer";
  return (
    <div>
      <h1 className="title">{name}</h1>
      <p>{role}</p>
      <input type="text" />
      {/* this is my profile */}
    </div>
  );
};

export default Profile;
