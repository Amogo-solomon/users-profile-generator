import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gray-300 rounded w-2/4 mx-auto mt-2"></div>
      <div className="space-y-2 mt-6">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-2/4"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
