import Link from "next/link";
import { ArrowRight, Shield, MessageCircle, Handshake, Scale } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ValueCard } from "@/components/value-card";

const partnerValues = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We prioritize transparent and responsive communication throughout every stage of our partnership.",
  },
  {
    icon: Handshake,
    title: "Mutual Respect",
    description:
      "Our partnerships are built on mutual respect, fair dealings, and shared commitment to success.",
  },
  {
    icon: Scale,
    title: "Compliance & Standards",
    description:
      "We respect supplier and brand requirements, including MAP policies where applicable.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
            Wholesale Partners
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight text-balance mb-6">
            Built For Strong Supplier Relationships
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            Evergreen Skye works with suppliers, distributors, and brands that
            value professionalism, communication, and long-term collaboration.
          </p>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Our Partnership Approach"
            subtitle="We believe in building relationships that benefit all parties through professional standards and ethical practices."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partnerValues.map((value) => (
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

      {/* Compliance Section */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c694b]/10 rounded-full text-[#1c694b] text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Brand Protection
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
                Compliance & Brand Protection
              </h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6">
                Evergreen Skye respects supplier and brand requirements,
                including MAP policies where applicable. We understand the
                importance of protecting brand integrity and value.
              </p>
              <ul className="space-y-4">
                {[
                  "Adherence to MAP policies",
                  "Authorized reseller documentation",
                  "Brand guideline compliance",
                  "Transparent reporting",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1c694b]" />
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1c694b]/10 to-[#1c694b]/5 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-[#1c694b]/20 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#1c694b] flex items-center justify-center">
                    <Shield className="w-14 h-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="Who We Work With"
            subtitle="We partner with a diverse range of businesses that share our commitment to quality and professionalism."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Suppliers",
                description:
                  "Product manufacturers and suppliers looking for a reliable distribution partner with professional standards.",
              },
              {
                title: "Distributors",
                description:
                  "Distribution companies seeking collaborative relationships built on trust and consistent communication.",
              },
              {
                title: "Brands",
                description:
                  "Established and emerging brands that value partners who respect and protect their brand integrity.",
              },
            ].map((partner) => (
              <div
                key={partner.title}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100"
              >
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">
                  {partner.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeader
            title="Ready to Partner With Us?"
            subtitle="If you&apos;re a supplier, distributor, or brand looking to establish a professional wholesale relationship, we&apos;d love to hear from you."
            light
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/30"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
