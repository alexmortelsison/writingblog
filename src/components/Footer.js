import React from "react";

const Footer = () => {
  return (
    <div className="items-center justify-center mt-44 text-gray-500 border-t-2">
      <ul className="flex items-center justify-center">
        <li className="flex gap-2 text-blue-500 font-semibold">
          <a href="#" className="hover:underline cursor-pointer">
            Home |
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            About Us |
          </a>
          <a href="#" className="hover:underline cursor-pointer">
            Terms
          </a>
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
