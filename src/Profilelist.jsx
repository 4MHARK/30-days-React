import React from "react";
import ProfileCard from "./ProfileCard";

const Profilelist = () => {
  const profiles = [
    { id: 1, name: "Ade", role: "Developer", isAvailable: true },
    { id: 2, name: "Tolu", role: "Designer", isAvailable: false },
    { id: 3, name: "Emeka", role: "Designer", isAvailable: true },
  ];
  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} name={profile.name} role={profile.role} isAvailable={profile.isAvailable} />  
      ))}
    </div>
  );
};

export default Profilelist;
