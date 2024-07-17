"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { User as prismaUser } from "@prisma/client";
import Link from "next/link";
import React from "react";

type UserProfileProps = {
  user: prismaUser;
};

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: user?.avatarUrl,
            }}
            className="transition-transform"
            name={`${user?.firstName } ${user?.lastName}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem color="danger">
            <Link href={"/user/profile"}>Profile</Link>
          </DropdownItem>
          <DropdownItem color="danger">
            <Link href={"/user/properties"}>Properties</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <LogoutLink>logout</LogoutLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserProfile;
