
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Please enter your password.",
  }),
});

const SignIn = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("earnedge_user");
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === values.email && user.password === values.password) {
        toast.success("Login successful!");
        navigate("/verify-code");
        return;
      }
    }
    
    toast.error("Invalid email or password!");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-navy p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-brand-green/20 bg-secondary/20 p-8 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-2 text-center">
          <img
            src="/public/lovable-uploads/5351f2e7-c6b8-4837-a3c4-379bba971eb3.png"
            alt="EarnEdge Logo"
            className="h-16 w-16"
          />
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Enter your credentials to access your account
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
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
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-brand-green text-white hover:bg-brand-lightGreen">
              Sign In
            </Button>
          </form>
        </Form>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-brand-green hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
