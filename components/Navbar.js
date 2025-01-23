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

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 backdrop-blur-lg bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-black">
          <Link href="/">
            BlogVerse - Your Blogging Companion
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="menu-toggle text-black text-2xl md:hidden focus:outline-none"
              aria-label="Open Menu"
            >
              ☰
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white text-black">
            <SheetHeader>
              <SheetTitle className="text-lg font-bold">BlogVerse</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col mt-4 space-y-4">
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
              <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
                Login
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
                Signup
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
        <Link href="/" className="text-black text-base font-medium hover:text-black hover:text-lg transition-colors">
         Home
        </Link>

        <Link href="/about" className="text-black text-base font-medium hover:text-black hover:text-lg transition-colors">
         About
        </Link>
        <Link href="/blog" className="text-black text-base font-medium hover:text-black hover:text-lg transition-colors">
         Blog
        </Link>
          <Link href="/contact" className="text-black text-base font-medium hover:text-black hover:text-lg transition-colors">
            Contact
          </Link>
          <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
            Login
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-white hover:text-blue-500 transition-colors">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
