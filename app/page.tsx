// import Image from "next/image";
// import Link from "next/link";
// import {
//   Shield,
//   Users,
//   Clock,
//   MessageCircle,
//   Settings,
//   Handshake,
//   Compass,
//   Home,
//   ChefHat,
//   Sparkles,
//   TreeDeciduous,
//   Headphones,
//   Heart,
//   ArrowRight,
//     PawPrintIcon
// } from "lucide-react";
// import { SectionHeader } from "@/components/section-header";
// import { ValueCard } from "@/components/value-card";
// import { FeatureCard } from "@/components/feature-card";
// import { CategoryCard } from "@/components/category-card";
//
// const values = [
//   {
//     icon: Shield,
//     title: "Integrity",
//     description:
//       "We believe business should be built on honesty, transparency, and mutual respect. Strong partnerships begin with trust and professional communication.",
//   },
//   {
//     icon: Users,
//     title: "Accountability",
//     description:
//       "Commitments matter. We value responsibility, consistency, and reliable execution in every partnership we build.",
//   },
//   {
//     icon: Clock,
//     title: "Long-Term Relationships",
//     description:
//       "Our focus is not short-term transactions, but sustainable partnerships that create long-term value for everyone involved.",
//   },
// ];
//
// const features = [
//   { icon: MessageCircle, title: "Professional Communication" },
//   { icon: Settings, title: "Responsible Operations" },
//   { icon: Handshake, title: "Flexible Collaboration" },
//   { icon: Compass, title: "Long-Term Perspective" },
// ];
//
// const categories = [
//   { icon: Home, title: "Home & Living", href: "/products?category=home-living" },
//   { icon: ChefHat, title: "Kitchen Essentials", href: "/products?category=kitchen-essentials" },
//   { icon: Sparkles, title: "Beauty & Personal Care", href: "/products?category=beauty-personal-care" },
//   // { icon: TreeDeciduous, title: "Outdoor & Lifestyle", href: "/products?category=outdoor-lifestyle" },
//   { icon: Headphones, title: "Electronics Accessories", href: "/products?category=electronics-accessories" },
//   // { icon: Heart, title: "Wellness Products", href: "/products?category=wellness-products" },
//   {icon: PawPrintIcon, title: "Pet supplies", href: "/products?category=pet-supplies" },
// ];
//
// export default function HomePage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             // src="/images/bg-image.jpg"
//               src="/images/hero-forest.jpg"
//             alt="Evergreen forest landscape"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//
//         {/* Content */}
//         <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center py-32">
//           <p className="text-sm md:text-base font-medium text-white/70 uppercase tracking-wider mb-6">
//             Evergreen Skye Wholesale Distribution
//           </p>
//           <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold text-white leading-[1.1] tracking-tight text-balance mb-8">
//             Reliable Partnerships Built On Responsibility And Trust
//           </h1>
//           <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
//             We believe strong business relationships are built through
//             accountability, clear communication, and long-term thinking.
//             Evergreen Skye works with suppliers and partners who value
//             professionalism, consistency, and sustainable growth.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/30"
//             >
//               Become a Partner
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//             <Link
//               href="/products"
//               className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
//             >
//               Explore Categories
//             </Link>
//           </div>
//         </div>
//
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
//           <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
//             <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
//           </div>
//         </div>
//       </section>
//
//       {/* Values Section */}
//       <section className="py-24 md:py-32 bg-zinc-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <SectionHeader
//             title="What We Value"
//             subtitle="Our business is built on the idea that human values and business standards should work together."
//           />
//
//           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {values.map((value) => (
//               <ValueCard
//                 key={value.title}
//                 icon={value.icon}
//                 title={value.title}
//                 description={value.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Why Work With Us Section */}
//       <section className="py-24 md:py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <SectionHeader
//                 title="Why Work With Evergreen Skye"
//                 subtitle="We approach wholesale partnerships with a long-term mindset, organized operations, and commitment to professional standards."
//                 centered={false}
//               />
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {features.map((feature) => (
//                 <FeatureCard
//                   key={feature.title}
//                   icon={feature.icon}
//                   title={feature.title}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//
//       {/* Product Categories Section */}
//       <section className="py-24 md:py-32 bg-zinc-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <SectionHeader title="Product Categories" />
//
//           <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
//             {categories.map((category) => (
//               <CategoryCard
//                 key={category.title}
//                 icon={category.icon}
//                 title={category.title}
//                 href={category.href}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* CTA Section */}
//       <section className="py-24 md:py-32 bg-zinc-950">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <SectionHeader
//             title="Looking For A Reliable Wholesale Partner?"
//             subtitle="If you are a supplier, distributor, or brand looking for a professional wholesale partner, we would be happy to connect and discuss potential opportunities."
//             light
//           />
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 mt-10 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/30"
//           >
//             Contact Us
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Users,
  Clock,
  MessageCircle,
  Settings,
  Handshake,
  Compass,
  Home,
  ChefHat,
  Sparkles,
  Headphones,
  PawPrintIcon,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ValueCard } from "@/components/value-card";
import { FeatureCard } from "@/components/feature-card";
import { CategoryCard } from "@/components/category-card";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
        "We believe business should be built on honesty, transparency, and mutual respect. Strong partnerships begin with trust and professional communication.",
  },
  {
    icon: Users,
    title: "Accountability",
    description:
        "Commitments matter. We value responsibility, consistency, and reliable execution in every partnership we build.",
  },
  {
    icon: Clock,
    title: "Long-Term Relationships",
    description:
        "Our focus is not short-term transactions, but sustainable partnerships that create long-term value for everyone involved.",
  },
];

const features = [
  {
    icon: MessageCircle,
    title: "Professional Communication",
  },
  {
    icon: Settings,
    title: "Responsible Operations",
  },
  {
    icon: Handshake,
    title: "Flexible Collaboration",
  },
  {
    icon: Compass,
    title: "Long-Term Perspective",
  },
];

const categories = [
  {
    icon: Home,
    title: "Home & Living",
    href: "/products?category=home-living",
  },
  {
    icon: ChefHat,
    title: "Kitchen Essentials",
    href: "/products?category=kitchen-essentials",
  },
  {
    icon: Sparkles,
    title: "Beauty & Personal Care",
    href: "/products?category=beauty-personal-care",
  },
  {
    icon: Headphones,
    title: "Electronics Accessories",
    href: "/products?category=electronics-accessories",
  },
  {
    icon: PawPrintIcon,
    title: "Pet Supplies",
    href: "/products?category=pet-supplies",
  },
];

export default function HomePage() {
  return (
      <>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
                src="/images/hero-forest.jpg"
                alt="Evergreen forest landscape"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-[760px] mx-auto px-6 text-center py-32">
            <p className="text-sm md:text-base font-medium text-white/70 uppercase tracking-[0.2em] mb-6">
              Independent Wholesale Distribution
            </p>

            <h1 className="text-[34px] md:text-[52px] lg:text-[62px] font-semibold text-white leading-[1.08] tracking-tight text-balance mb-8">
              Reliable Partnerships Built On Trust And Responsibility
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-[660px] mx-auto">
              Evergreen Skye works with suppliers, distributors, and brands that
              value accountability, clear communication, and long-term business
              relationships.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/30"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeader
                title="What We Value"
                subtitle="Strong partnerships begin with trust, accountability, and shared standards."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value) => (
                  <ValueCard
                      key={value.title}
                      icon={value.icon}
                      title={value.title}
                      description={value.description}
                  />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader
                    title="Why Work With Evergreen Skye"
                    subtitle="We approach wholesale partnerships with organized operations, professional communication, and a long-term mindset."
                    centered={false}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-28 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeader
                title="Product Categories"
                subtitle="We focus on practical consumer categories with long-term wholesale potential."
            />

            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {categories.map((category) => (
                  <CategoryCard
                      key={category.title}
                      icon={category.icon}
                      title={category.title}
                      href={category.href}
                  />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SectionHeader
                title="Looking For A Trusted Wholesale Partner?"
                subtitle="If you are a supplier, distributor, or brand looking for a responsible wholesale partner, we would be happy to connect and discuss potential opportunities."
                light
            />

            <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/30"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </>
  );
}