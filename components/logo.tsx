import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="items-center hover:opacity-80 transition gap-x-1 hidden md:flex">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h1 className="text-4xl font-bold">Tra</h1>
        <span className="text-sky-700 text-4xl font-bold">X</span>
      </div>
    </Link>
  );
};
