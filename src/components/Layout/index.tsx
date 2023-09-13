"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Login from "../PageComponent/Login";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  info: any;
};

function Layout({ children, info }: Props) {
  console.log(info);
  // get cookie from server side
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Sidebar> {children}</Sidebar>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default Layout;
