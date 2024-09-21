import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex justify-between">
        <h1 className="text-white text-3xl py-10 px-32 font-bold">Writing Blog</h1>
        <div className="flex items-center justify-center gap-3 px-32">
          <input
            placeholder="Username"
            className="py-2 px-2 rounded-xl bg-gray-700 text-white"
          />
          <input
            placeholder="Password"
            className="py-2 px-2 rounded-xl  bg-gray-700  text-white"
          />
          <button className="px-8 py-3 rounded-3xl text-white bg-green-600 hover:bg-green-400">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
