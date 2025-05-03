
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  bankName: z.string().min(2, {
    message: "Bank name must be at least 2 characters.",
  }),
});

const BuyEarnId = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      fullName: "",
      bankName: "",
    },
  });

  // Try to pre-fill the form with data from localStorage if available
  React.useEffect(() => {
    const storedUser = localStorage.getItem("earnedge_user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      form.setValue("email", user.email || "");
      form.setValue("fullName", user.fullName || "");
    }
  }, [form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Store payment information for reference
    localStorage.setItem("earnedge_payment_info", JSON.stringify(values));
    navigate("/payment-info");
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
          <h1 className="text-3xl font-bold">Buy EARN ID</h1>
          <p className="text-sm text-muted-foreground">
            Please provide your details to purchase an EARN ID
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name (for making payment)</FormLabel>
                  <FormControl>
                    <Input placeholder="Bank Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-brand-green text-white hover:bg-brand-lightGreen">
              PROCEED
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BuyEarnId;
