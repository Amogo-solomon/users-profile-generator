import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import UserDetailTable from "../components/UserDetailTable";
import SkeletonLoader from "../components/SkeletonLoader";
import Header from "../components/Header";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300">
        <Header toggleDarkMode={toggleDarkMode} fetchNewUser={fetchUser} />
        <main className="container mx-auto mt-10 px-4">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <>
              <UserCard user={user} />
              <UserDetailTable user={user} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserProfilePage;
