import { Button } from "@nextui-org/react";
import React from "react";
import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

type Props = {};

const Signin = async (props: Props) => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();

  if (await isAuthenticated()) return <div>{user.given_name}</div>;
  return (
    <div className="flex gap-3">
      <Button color="primary">
        <LoginLink>Login</LoginLink>
      </Button>
      <Button color="primary">
        <RegisterLink>Register</RegisterLink>
      </Button>
    </div>
  );
};

export default Signin;
