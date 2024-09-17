"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/img/logo.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import MobileNav from "./mobile-nav";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: (
    | {
        name: string;
        link: string;
        scroll?: undefined;
        subItems?: undefined;
      }
    | {
        name: string;
        link: string;
        scroll: boolean;
        subItems?: undefined;
      }
    | {
        name: string;
        link: string;
        subItems: {
          name: string;
          description: string;
          link: string;
        }[];
        scroll?: undefined;
      }
  )[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-full  fixed top-0 inset-x-0 mx-auto  bg-background/70 border-b backdrop-blur-xl  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center  justify-between space-x-4",
          className
        )}
      >
        <div className=" flex items-center ">
          <div>
            <Link href="/" className="logo font-alt">
              <Image
                src={Logo}
                alt="MADHACK"
                width={75}
                className="mr-4 w-20"
                height={75}
              />
            </Link>
          </div>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {navItems.map((item, index) =>
                item.subItems == undefined ? (
                  <NavigationMenuItem key={index}>
                    <Link href={item.link} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4  bg-muted  rounded-2xl  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-background/30 to-background p-4 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <Image
                                src={Logo}
                                alt="xleron Tech"
                                width={40}
                                className="mr-4 mb-4 w-24"
                                height={40}
                              />

                              <p className="text-sm leading-tight text-muted-foreground">
                                Experience the power of technology tailored to
                                your unique needs and goals
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        {item.subItems.map((subitem) => (
                          <ListItem
                            key={subitem.name}
                            href={subitem.link}
                            title={subitem.name}
                          >
                            {subitem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className=" flex items-center space-x-2">
          <Link className={cn(buttonVariants({}))} href={"#"}>
            Register Now
          </Link>
          <MobileNav navItems={navItems} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors hover:bg-background/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug font-medium text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
