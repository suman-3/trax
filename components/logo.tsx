import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hover:opacity-75 transition gap-x-2 hidden md:flex">
        <h1 className="text-4xl font-bold">
          Tra
          <span className="text-fuchsia-700">X</span>
        </h1>
      </div>
    </Link>
  );
};
