"use client";

import React from "react";

import Button from "@/components/Button";
import { useGenerationStore } from "@/components/Context/useGenerationStore";
import ProtectPages from "@/components/HOC/ProtectPages";

type Props = {
  message: string;
};

function page({ message }: Props) {
  const { info, setInfo } = useGenerationStore();
  return (
    <div className=" text-white">
      {info.name} {info.age}
      <h1>{message}</h1>
      <Button onClick={() => setInfo("jomari", 15)}>
        click to update state management info
      </Button>
    </div>
  );
}

export default page;
