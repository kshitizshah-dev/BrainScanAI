import React from 'react';

function UserCard({ name, avatarUrl }) {
  return (
    <div className="flex items-center space-x-4 p-4  bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <img
        className="w-28 h-28 rounded-full ml-20 object-cover border-2 border-purple-600"
        src={avatarUrl || 'https://via.placeholder.com/150'}
        alt="User Avatar"
      />
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">BrainScanAI user</p>
      </div>
    </div>
  );
}

export default UserCard;