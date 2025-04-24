import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { isAuthenticated, userData } = useContext(UserContext);

  if (!isAuthenticated) {
    return <p>Please log in to see your profile.</p>;
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{userData.name}</h2>
      <p className="text-gray-600">{userData.email}</p>
    </div>
  );
}

export default Profile;
