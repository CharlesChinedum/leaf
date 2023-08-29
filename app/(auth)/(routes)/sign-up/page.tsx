import React from "react";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-baseColor hover:bg-transparent hover:outline-[1px] hover:outline hover:outline-baseHeading hover:text-baseColor",
        },
      }}
    />
  );
};

export default SignUpPage;
