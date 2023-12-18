import Header from "@/components/component/header";
import Link from "next/link";
import React from "react";

const UserProfilePage = () => {
  const list = [
    "profile",
    "info",
    "friends",
    "compose history",
    "products",
    "stared",
    "contacts",
    "links",
    "interests",
    "achivements",
    "settings",
  ];
  return (
    <div>
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            User's Profile Page
          </h1>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4 bg-white shadow rounded-lg mr-4">
              <div className="flex flex-col items-center pb-6 border-b">
                <img
                  className="w-24 h-24 rounded-full mb-3"
                  src="https://static.vecteezy.com/system/resources/previews/000/643/561/original/music-note-icon-vector.jpg"
                  alt="Avatar"
                />
                <h2 className="text-lg font-semibold text-gray-700">
                  Username
                </h2>
              </div>
              <nav className="mt-6">
                <ul>
                  {list.map((text) => (
                    <li key={text} style={{ marginBottom: "40px" }}>
                      <Link
                        className="text-sm text-blue-600  ml-1"
                        href={"/profile/"}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* Main Content */}
            <div className="w-3/4 p-4 bg-white shadow rounded-lg">
              <div className="main-area">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Main Area
                </h2>
                {/* Content goes here */}
                <p className="text-gray-600">
                  User-related content will be displayed here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
