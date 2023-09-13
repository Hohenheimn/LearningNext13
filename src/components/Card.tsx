import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <div className=" bg-white rounded-md p-6">{children}</div>;
}
