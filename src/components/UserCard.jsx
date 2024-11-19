import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="w-40 h-40 rounded-full mx-auto mt-6 border-4 border-blue-500"
      />
      <h2 className="text-xl font-semibold mt-4">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-500 text-sm">{user.email}</p>
    </div>
  );
};

export default UserCard;
