import Link from "next/link";
import { TreePine, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ],
};

const contactInfo = {
  email: "info@evergreenskye.com",
  phone: "+1 (936) 330-6181",
  address: {
    line1: "8900 Research Park Drive",
    line2: "Suite 400",
    city: "Spring, TX, 77381",
    country: "United States",
  },
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src={'/logo-es.svg'} alt={"Logo"} width={50} height={50} />
              <span className="text-xl font-semibold tracking-tight">
                Evergreen Skye
              </span>
            </Link>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              Professional wholesale distribution and supplier partnerships
              built on responsibility, trust, and long-term thinking.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>{contactInfo.address.line1}</p>
                  {/*<p>{contactInfo.address.line2}</p>*/}
                  <p>{contactInfo.address.city}</p>
                  <p>{contactInfo.address.country}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Evergreen Skye. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
