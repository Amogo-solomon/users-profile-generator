import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserDetail from "../components/UserDetail";
import SkeletonLoader from "../components/SkeletonLoader";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-4">
      <UserCard user={user} />
      <UserDetail user={user} />
    </div>
  );
};

export default UserProfilePage;
