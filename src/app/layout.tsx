import axios from "axios";
import { getCookie } from "cookies-next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import Layout from "@/components/Layout";
import Login from "@/components/PageComponent/Login";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get cookie from server side
  const token = cookies()?.get("user")?.value;

  const infor = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <html lang="en">
      <body className={inter.className}>
        {token ? <Layout info={infor}>{children}</Layout> : <Login />}
      </body>
    </html>
  );
}
