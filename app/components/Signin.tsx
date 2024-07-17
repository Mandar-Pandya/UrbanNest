import { Button } from "@nextui-org/react";
import React from "react";
import {
  getKindeServerSession,
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import UserProfile from "./UserProfile";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

type Props = {
  user?: User;
};

const Signin = async (props: Props) => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    return <>{dbUser!! && <UserProfile user={dbUser} />}</>;
  }
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
