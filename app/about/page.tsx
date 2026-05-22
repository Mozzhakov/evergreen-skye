import { Shield, MessageCircle, Settings, Clock, Users } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { FeatureCard } from "@/components/feature-card";

const coreValues = [
  { icon: Shield, title: "Integrity" },
  { icon: MessageCircle, title: "Clear Communication" },
  { icon: Settings, title: "Responsible Operations" },
  { icon: Clock, title: "Long-Term Thinking" },
  { icon: Users, title: "Professional Relationships" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight text-balance mb-6">
            About Evergreen Skye
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            Evergreen Skye is an independently operated wholesale business
            focused on responsible partnerships, professional communication, and
            sustainable growth.
          </p>
        </div>
      </section>

      {/* Our Perspective Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight mb-6">
                Our Perspective
              </h2>
              <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
                <p>
                  We believe strong business relationships are built through
                  accountability, consistency, and mutual respect.
                </p>
                <p>
                  Our background includes experience in customer-focused and
                  partnership-driven business environments. That experience
                  shaped the way we approach business today — with
                  professionalism, organization, and a long-term mindset at the
                  center of every relationship.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1c694b]/10 to-[#1c694b]/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#1c694b]/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#1c694b] flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Matters To Us Section */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader title="What Matters To Us" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((value) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed text-balance">
            &ldquo;We believe strong business relationships are built through
            responsibility, consistency, and mutual respect.&rdquo;
          </blockquote>
          <div className="mt-8 w-16 h-1 bg-[#1c694b] mx-auto rounded-full" />
        </div>
      </section>
    </>
  );
}
