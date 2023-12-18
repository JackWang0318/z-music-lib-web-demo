import Link from "next/link";
import React from "react";
import MusicIcon from "./MusicIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-white shadow-md">
      <Link className="flex items-center justify-center" href="/">
        <MusicIcon className="h-6 w-6 mr-2" />
        <span className="text-xl font-bold">Z Music Lib</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://github.com/pigsquare/z-melody-composer-lib"
          target="_blank"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          MusicHub
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="px-2 py-1 text-sm font-medium rounded bg-blue-500 text-white hover:bg-blue-600"
            href="/login"
          >
            Log In
          </Link>
          <Link
            className="px-2 py-1 text-sm font-medium rounded border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="ml-4">
        <Avatar className="h-9 w-9 hover:text-blue-600">
          <AvatarImage alt="User avatar" src="/#" />
          <AvatarFallback>
            <Link href="/profile">Jack</Link>
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
