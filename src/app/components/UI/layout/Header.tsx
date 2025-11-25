"use client";

import { LayoutConfig } from "@/src/config/layout.config";
import { siteConfig } from "@/src/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { Image } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import React from "react";

export const Logo = () => {
  return (
    <Image src="/food-logo.svg" alt={siteConfig.title} width={26} height={26} />
  );
};

export default function Header() {
  const pathname = usePathname();

  const [isRegistrationOpen, setRegistrationOpen] = React.useState(false);
  const [isLoginOpen, setLoginOpen] = React.useState(false);

  const getNavItems = () => {
    return siteConfig.navbarItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1 | ${isActive ? "text-blue-500" : "text-foreground"}
              hover:text-blue-300 hover:border
              hover:border-blue-300 hover:rounded-md
              transition-colors
              transition-border
              duration-200`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar style={{ height: `${LayoutConfig.headerHeight}` }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setLoginOpen(true)}
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setRegistrationOpen(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </Navbar>
  );
}
