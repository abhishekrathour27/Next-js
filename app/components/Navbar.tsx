import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-500 h-14 flex justify-around items-center">
      <div className="space-x-2">
        <input
          type="text"
          className="border-2 border-green-500 py-2 px-10 rounded-lg  "
        />
        <button className="bg-green-500 text-white rounded-lg py-2 px-3">
          Submit
        </button>
      </div>
      <div>
        <ul className="flex text-white gap-3">
          <Link href="/">
            {" "}
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            {" "}
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/contact">
            {" "}
            <li className="cursor-pointer">Contact</li>
          </Link>
          <Link href="/help">
            {" "}
            <li className="cursor-pointer">Help</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
