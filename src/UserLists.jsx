import React from "react";
import UserCards from "./UserCards";


const UserLists = () => {
  const users = [
    { id: 1, name: "Ade", role: "Developer" },
    { id: 2, name: "Tolu", role: "Designer" },
    { id: 3, name: "Emeka", role: "Designer" },
  ];
  return (
    <div>
      {users.map((user) => (
        <UserCards key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
};

export default UserLists;
