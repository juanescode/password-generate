"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-blue-800 text-white">
        <SheetHeader className="text-left mb-5">
          <SheetTitle className="text-white">JuanesPassword</SheetTitle>
          <SheetDescription className="text-slate-100">
            Create and manage all of your password
          </SheetDescription>
        </SheetHeader>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
}