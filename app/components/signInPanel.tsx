import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import UserProfile from "./UserProfile";

const signInPanel = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  console.log(await isAuthenticated());

  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });
    return <>{dbUser!! && <UserProfile user={dbUser} />}</>;
  }
  return <div>signInPanel</div>;
};

export default signInPanel;
