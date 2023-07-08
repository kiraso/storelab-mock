import Input from "@/components/input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const authPending = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="relative h-full ">
      <div className="flex h-screen w-full justify-center items-center  flex-col gap-3">
        <img src="images/logo.svg" alt="Logo" className="h-12" />
        <h1>Confirmation email has been sent</h1>
        <p>An email has been sent to {router.query.email}</p>
        <p>Please check your inbox to verify you email</p>
      </div>
    </div>
  );
};

export default authPending;
