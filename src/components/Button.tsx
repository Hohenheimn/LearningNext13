import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: Props) {
  return (
    <button className={"rounded-md px-3 py-2 bg-white " + className}>
      {children}
    </button>
  );
}
