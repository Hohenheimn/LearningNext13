"use client";

import React from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import api from "@/util/api";

import Card from "../Card";

function Login() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const Submit = async (data: any) => {
    try {
      const response = await api.post("/auth/login", {
        email: data.username,
        password: data.password,
      });
      const { token } = await response.data;
      setCookie("user", token);
      router.refresh();
    } catch (error: any) {
      console.log(error);
    }
    // deleteCookie("user-password");
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center text-black">
      <Card>
        <form
          className=" flex flex-col space-y-5"
          onSubmit={handleSubmit(Submit)}
        >
          <h1>Login</h1>
          <div>
            <p>Username</p>
            <Controller
              name="username"
              control={control}
              rules={{ required: "required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className=" shadow-lg bg-gray-100"
                />
              )}
            />
          </div>

          <div>
            <p>Password</p>
            <Controller
              name="password"
              control={control}
              rules={{ required: "required" }}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  className=" shadow-lg bg-gray-100"
                />
              )}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
