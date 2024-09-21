import React from "react";

const HouseGuest = () => {
  return (
    <div className="flex items-center justify-center mt-24 pl-32 pr-10">
      <div className="flex-wrap items-center justify-center">
        <h1 className="text-7xl ">Remember Writing?</h1>
        <p className="text-3xl text-gray-500 mt-4 mr-2">
          Are you sick of short tweets and impersonal shared posts that are
          reminiscent of the late 90's email forwards? We believe getting back
          to actually writing is the key to enjoying the internet again.
        </p>
      </div>
      <div className=" items-center justify-center  border border-gray-800 pl-12 pr-80 mr-24 py-24 rounded-xl">
        <h2 className="text-gray-500 mb-1">Username</h2>
        <input
          placeholder="Pick a username"
          className="border border-gray-300 focus:border-gray-500 pl-2 pr-16 py-2 rounded-lg mb-5"
        />
        <h2 className="text-gray-500 mb-1">Email</h2>
        <input
          placeholder="you@example.com"
          className="border border-gray-300 focus:border-gray-500 pl-2 pr-16 py-2 rounded-lg mb-5"
        />
        <h2 className="text-gray-500 mb-1">Password</h2>
        <input
          placeholder="Create a password"
          className="border border-gray-300 focus:border-gray-500 pl-2 pr-16 py-2 rounded-lg"
        />
        <button className="px-8 py-3 rounded-3xl text-white bg-green-600 hover:bg-green-400 text-xl mt-4">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HouseGuest;
