import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="items-center justify-center mt-44 text-gray-500 border-t-2">
      <ul className="flex items-center justify-center">
        <li className="flex gap-2 text-blue-500 font-semibold">
          <Link to="/" className="hover:underline cursor-pointer">
            Home |
          </Link>
          <Link to="/about" className="hover:underline cursor-pointer">
            About Us |
          </Link>
          <Link to="/terms" className="hover:underline cursor-pointer">
            Terms
          </Link>
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
