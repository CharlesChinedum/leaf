import React from "react";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-baseColor hover:bg-transparent hover:outline-[1px] hover:outline hover:outline-baseHeading hover:text-baseColor",
        },
      }}
    />
  );
};

export default SignInPage;
