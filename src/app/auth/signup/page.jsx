"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
    Radio,
     RadioGroup
} from "@heroui/react";
import {} from "@heroui/react";

import Link from "next/link";

const SignUp = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userdata = Object.fromEntries(formData.entries());

    console.log(userdata);

    const { data, error } = await authClient.signUp.email({
      name: userdata.name,
      email: userdata.email,
      password: userdata.password,
      role:userdata.role,
      callbackURL: "/auth/signin",
    });

    console.log("DATA:", data);
    console.log("ERROR:", error);
  };

  return (
    <div className="min-h-screen bg-[#f7f7fb] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-md items-center justify-center">
        <div className="w-full">
          {/* Signup Card */}
          <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Top Header */}
            <div className="bg-[#222222] px-6 py-8 text-center sm:px-8">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C53FE] text-white shadow-lg shadow-[#5C53FE]/30">
                <Check className="h-6 w-6" />
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Create Account
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Sign up to get started with us
              </p>
            </div>

            {/* Form Area */}
            <div className="p-6 sm:p-8">
              <Form
                className="flex w-full flex-col gap-5"
                onSubmit={onSubmit}
              >
                {/* Name */}
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label className="mb-2 block text-sm font-semibold text-gray-700">
                    Name
                  </Label>

                  <Input
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#5C53FE] focus:bg-white focus:ring-4 focus:ring-[#5C53FE]/10"
                  />

                  <FieldError className="mt-1 text-sm text-red-500" />
                </TextField>

                {/* Email */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#5C53FE] focus:bg-white focus:ring-4 focus:ring-[#5C53FE]/10"
                  />

                  <FieldError className="mt-1 text-sm text-red-500" />
                </TextField>

                {/* Password */}
                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }

                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#5C53FE] focus:bg-white focus:ring-4 focus:ring-[#5C53FE]/10"
                  />

                  <Description className="mt-2 text-xs leading-5 text-gray-500">
                    Must be at least 8 characters with 1 uppercase and 1 number
                  </Description>

                  <FieldError className="mt-1 text-sm text-red-500" />
                </TextField>

                {/* Role */}
                <div className="flex flex-col gap-4">
      
      <RadioGroup defaultValue="seeker" isRequired name="role" orientation="horizontal">
        <Radio  Value="seeker">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            seeker
          </Radio.Content>
          
        </Radio>
        <Radio value="requreter">
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            requreter
          </Radio.Content>
          
        </Radio>
        
      </RadioGroup>
    </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#5C53FE] px-5 font-semibold text-white shadow-lg shadow-[#5C53FE]/20 transition hover:bg-[#4f46e5] active:scale-[0.98]"
                  >
                    <Check className="h-5 w-5" />
                    Submit
                  </Button>

                  <Button
                    type="reset"
                    variant="secondary"
                    className="h-12 rounded-xl border border-gray-200 bg-gray-50 px-5 font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-[0.98]"
                  >
                    Reset
                  </Button>
                </div>
              </Form>

              {/* Bottom Text */}
              <p className="mt-7 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="font-semibold text-[#5C53FE] transition hover:text-[#4f46e5] hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;