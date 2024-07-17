import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user, "in route file getting the user");

  if (!user || user === null || !user.id)
    throw new Error("Something went wrong with authentication ");

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  console.log(dbUser, "db user");

  if (!dbUser) {
    const newUser = await prisma.user.create({
      data: {
        id: user?.id,
        firstName: user?.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user?.email ?? "",
      },
    });
    
  }
  return NextResponse.redirect("http://localhost:3000/");
}
