// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 backdrop-blur-lg bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-black dark:text-white">
          <Link href="/">
            BlogVerse - Your Blogging Companion
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="menu-toggle text-black text-2xl md:hidden focus:outline-none dark:text-white"
              aria-label="Open Menu"
            >
              ☰
            </button>
          </SheetTrigger>
          <span className="mx-2 block md:hidden"><ModeToggle></ModeToggle></span>
          <SheetContent side="right" className="bg-white text-black">
            <SheetHeader>
              <SheetTitle className="text-lg font-bold">BlogVerse</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-4 space-y-4 container mx-auto flex justify-between items-center">
              <Link href="/" className="text-base hover:underline">
                Home
              </Link>
              <Link href="/blog" className="text-base hover:underline">
                Blog
              </Link>
              <Link href="/about" className="text-base hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-base hover:underline">
                Contact
              </Link>
              <div className="flex space-x-4"> {/* Ensures the buttons are in the same row */}
                <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
                 Login
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
                  Signup
              </Button>
            </div>
            </div>
          </SheetContent>
        </Sheet>

        

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className="text-black text-base font-medium hover:text-black hover:text-lg hover:font-bold dark:text-white transition-colors">
         Home
        </Link>

        <Link href="/about" className="text-black text-base font-medium hover:text-black hover:text-lg hover:font-bold dark:text-white transition-colors">
         About
        </Link>
        <Link href="/blog" className="text-black text-base font-medium hover:text-black hover:text-lg hover:font-bold transition-colors dark:text-white">
         Blog
        </Link>
          <Link href="/contact" className="text-black text-base font-medium hover:text-black hover:text-lg hover:font-bold transition-colors dark:text-white">
            Contact
          </Link>
          <Button variant="outline" className="border-black dark:border-white text-black dark:text-white hover:text-blue-500 transition-colors">
            Login
          </Button>
          <Button variant="outline" className="border-black dark:border-white text-black dark:text-white hover:text-blue-500 transition-colors">
            Signup
          </Button>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
