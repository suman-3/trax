import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hover:opacity-75 transition gap-x-1 hidden md:flex">
        <Image src='/logo.svg' alt="logo" width={40} height={40}  />
        <h1 className="text-4xl font-bold">
          Tra
          <span className="text-fuchsia-700">X</span>
        </h1>
      </div>
    </Link>
  );
};
