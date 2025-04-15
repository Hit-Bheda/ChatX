"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import CardWrapper from "./card-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import AuthFooter from "./auth-footer";

type LoginType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginType) => {
    console.log(values);
  };
  return (
    <CardWrapper
      title="Welcome Back!"
      description="Please Login To Your Account!"
      footer={<AuthFooter text="Don't Have An Account? Signup" url="/signup" />}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="exaple@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="*******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex items-center justify-between">
              <div className="text-sm flex items-center justify-center gap-2">
                {" "}
                <Checkbox />
                Remember Me!
              </div>
              <Link href="/forgot-password" className="text-sm hover:underline">
                {" "}
                Forgot Password?
              </Link>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
