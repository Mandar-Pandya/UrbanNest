"use client";
import React, { ReactNode, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Logo from "../../public/urbannest-high-resolution-logo-black-transparent.svg";
import Image from "next/image";
import Signin from "./Signin";

type Props = {
  children: ReactNode;
};

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const Appbar = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar className="shadow-md" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href={"/"}
            className="flex items-center hover:text-primary-600 transition-colors text-black-300"
          >
            <Image src={Logo} className="h-10" alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">{children}</NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              // size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Appbar;
