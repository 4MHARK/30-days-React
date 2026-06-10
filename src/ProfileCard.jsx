import React from "react";

const ProfileCard = ({ id, name, role, isAvailable }) => {
    const handleClick =() =>{
        console.log(`Connecting with ${name}...`);
    }
  return (
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600 font-sm">{role}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>Connect</button>
      {isAvailable ? <p className="text-green-500">Profile is available</p> : <p className="text-red-500">Profile is not available</p>}
    </div>
  );
};

export default ProfileCard;
