"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[rgba(20,20,20,0.4)] backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/*<div*/}
            {/*  className={cn(*/}
            {/*    "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500",*/}
            {/*    isScrolled*/}
            {/*      ? "bg-[#1c694b]"*/}
            {/*      : isHomePage*/}
            {/*      ? "bg-white/10 backdrop-blur-sm border border-white/20"*/}
            {/*      : "bg-[#1c694b]"*/}
            {/*  )}*/}
            {/*>*/}
              <Image src={'/logo-es.svg'} alt={"Logo"} width={50} height={50} />
            {/*</div>*/}
            <span
              className={cn(
                "text-xl font-semibold tracking-tight transition-colors duration-500",
                isScrolled || isHomePage ? "text-white" : "text-zinc-900"
              )}
            >
              Evergreen Skye
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-500",
                  pathname === link.href
                    ? isScrolled || isHomePage
                      ? "text-white bg-white/15"
                      : "text-[#1c694b] bg-[#1c694b]/10"
                    : isScrolled || isHomePage
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/20"
            >
              Become a Partner
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-500",
              isScrolled || isHomePage
                ? "text-white hover:bg-white/10"
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                    pathname === link.href
                      ? "text-[#1c694b] bg-[#1c694b]/5"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 px-4 py-3 text-base font-medium text-center rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
