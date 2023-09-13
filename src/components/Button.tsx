import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={"rounded-md px-3 py-2 bg-[#dd0000] " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
