import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = ({
  navItems,
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
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0 md:hidden  ">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className=" z-[5000000] bg-muted rounded-b-3xl pb-14"
      >
        <nav className="grid gap-6 text-lg font-medium">
          {navItems.map((navItem, index) =>
            navItem.subItems == undefined ? (
              <Link
                key={index}
                href={navItem.link}
                className="text-muted-foreground text-xl hover:text-foreground"
              >
                {navItem.name}
              </Link>
            ) : (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="pt-0 text-muted-foreground text-lg hover:text-foreground">
                    {navItem.name}
                  </AccordionTrigger>
                  <AccordionContent className=" grid gap-4 ml-2 text-lg font-medium">
                    {navItem.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.link}
                        className="text-muted-foreground  hover:text-foreground"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
