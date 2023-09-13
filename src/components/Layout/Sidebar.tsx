"use client";

import React from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  return (
    <ul className=" w-full flex flex-wrap min-h-screen">
      <li className=" w-[30%] border border-black">
        <div className=" w-full py-10 flex justify-center">
          <h1 className=" text-4xl">LOGO</h1>
        </div>
        <div className=" w-full pl-5 space-y-5">
          <h4 className=" hover:bg-black hover:text-white">
            <Link href="/dashboard">Dashboard</Link>
          </h4>
          <section className=" space-y-3">
            <h4>Project</h4>
            <ul className=" pl-5">
              <li className=" hover:bg-black hover:text-white">
                <Link href="/corporate">Corporate</Link>
              </li>
              <li className=" hover:bg-black hover:text-white">
                <Link href="/user">User</Link>
              </li>
              <li className=" hover:bg-black hover:text-white">
                <Link href="/access">Access</Link>
              </li>
            </ul>
          </section>
        </div>
      </li>
      <li className=" flex-1 border border-red-300">{children}</li>
    </ul>
  );
}
