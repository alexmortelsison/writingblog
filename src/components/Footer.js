import React from "react";

const Footer = () => {
  return (
    <div className="items-center justify-center mt-44 text-gray-500 border-t-2">
      <ul className="flex items-center justify-center">
        <li className="flex gap-2 text-blue-400">
          <h1>Home |</h1>
          <h1>About Us |</h1>
          <h1>Terms</h1>
        </li>
      </ul>

      <div className="flex items-center justify-center">
        Copyright &copy;{new Date().getFullYear()} Writing Blog. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
