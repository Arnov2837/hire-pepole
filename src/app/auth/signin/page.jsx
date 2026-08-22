"use client";
import { authClient } from "@/lib/auth-client";
// import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

const Signin = () => {

  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const logindata = Object.fromEntries(formData.entries());
    console.log(logindata);


    const {data, error } = await authClient.signIn.email({
    email: logindata.email, // required
    password: logindata.password, // required
    rememberMe: true,
    callbackURL: "/",
});
    
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10">
  <div className="w-full max-w-md">

    {/* Login Card */}
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Login to your account
        </p>
      </div>

      <Form
        className="flex w-full flex-col gap-5"
        onSubmit={onSubmit}
      >

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="mb-2 block text-sm font-semibold text-gray-700">
            Email
          </Label>

          <Input
            name="email"
            placeholder="Input your email"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          <FieldError className="mt-1 text-sm text-red-500" />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          defaultValue="Arnov12345"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label className="mb-2 block text-sm font-semibold text-gray-700">
            Password
          </Label>

          <Input
            name="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          <FieldError className="mt-1 text-sm text-red-500" />
        </TextField>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300"
            />
            Remember me
          </label>

          <span className="cursor-pointer font-medium text-blue-600 hover:underline">
            Forgot Password?
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">

          <Button
            type="submit"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
          >
            Login
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
          >
            Reset
          </Button>

        </div>
      </Form>

      {/* Bottom Text */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        
       <Link href="/auth/signup" className="cursor-pointer font-semibold text-blue-600 hover:underline">Sign Up</Link>
      </p>

    </div>
  </div>
</div>
  );
};

export default Signin;