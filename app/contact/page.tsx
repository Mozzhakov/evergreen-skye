import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: ["info@evergreenskye.com"],
    href: "mailto:info@evergreenskye.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: ["+1 (936) 330-6181"],
    href: "tel:+19363306181",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: ["Mon - Fri: 8:00 AM - 6:00 PM (CST)"],
  },
  {
    icon: MapPin,
    title: "Address",
    description: [
      "8900 Research Park Drive",
      "Spring, TX, 77381",
      "United States",
    ],
  },
];

const officeAddress = {
  line1: "8900 Research Park Drive",
  line2: "Suite 400",
  city: "Spring",
  state: "TX",
  zip: "77381",
  country: "United States",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight text-balance mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re a supplier, distributor, or brand interested in
            partnership opportunities, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Fill out the form and we&apos;ll get back to you within 1-2
                business days. We look forward to learning about your business
                and exploring how we might work together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1c694b]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#1c694b]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-900">{item.title}</h3>

                      {item.href ? (
                          <a
                              href={item.href}
                              className="text-zinc-500 hover:text-[#1c694b] transition-colors"
                          >
                            {item.description.map((line) => (
                                <span key={line} className="block">
        {line}
      </span>
                            ))}
                          </a>
                      ) : (
                          <div className="text-zinc-500">
                            {item.description.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                          </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Our Contacts Section */}
      {/*<section className="py-24 md:py-32 bg-zinc-50">*/}
      {/*  <div className="max-w-7xl mx-auto px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-16">*/}
      {/*      <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">*/}
      {/*        Our Contacts*/}
      {/*      </p>*/}
      {/*      <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">*/}
      {/*        Visit Us or Get in Touch*/}
      {/*      </h2>*/}
      {/*    </div>*/}

      {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
      {/*      /!* Address Card *!/*/}
      {/*      <div className="bg-white rounded-3xl p-8 shadow-sm">*/}
      {/*        <div className="w-14 h-14 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-6">*/}
      {/*          <MapPin className="w-7 h-7 text-[#1c694b]" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-zinc-900 mb-3">*/}
      {/*          Office Address*/}
      {/*        </h3>*/}
      {/*        <address className="text-zinc-500 not-italic leading-relaxed">*/}
      {/*          {officeAddress.line1}*/}
      {/*          <br />*/}
      {/*          {officeAddress.line2}*/}
      {/*          <br />*/}
      {/*          {officeAddress.city}, {officeAddress.state} {officeAddress.zip}*/}
      {/*          <br />*/}
      {/*          {officeAddress.country}*/}
      {/*        </address>*/}
      {/*      </div>*/}

      {/*      /!* Email Card *!/*/}
      {/*      <div className="bg-white rounded-3xl p-8 shadow-sm">*/}
      {/*        <div className="w-14 h-14 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-6">*/}
      {/*          <Mail className="w-7 h-7 text-[#1c694b]" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-zinc-900 mb-3">*/}
      {/*          Email Us*/}
      {/*        </h3>*/}
      {/*        <p className="text-zinc-500 mb-2">General Inquiries</p>*/}
      {/*        <a*/}
      {/*          href="mailto:contact@evergreenskye.com"*/}
      {/*          className="text-[#1c694b] hover:underline font-medium"*/}
      {/*        >*/}
      {/*          contact@evergreenskye.com*/}
      {/*        </a>*/}
      {/*        <p className="text-zinc-500 mt-4 mb-2">Partnerships</p>*/}
      {/*        <a*/}
      {/*          href="mailto:partners@evergreenskye.com"*/}
      {/*          className="text-[#1c694b] hover:underline font-medium"*/}
      {/*        >*/}
      {/*          partners@evergreenskye.com*/}
      {/*        </a>*/}
      {/*      </div>*/}

      {/*      /!* Phone Card *!/*/}
      {/*      <div className="bg-white rounded-3xl p-8 shadow-sm">*/}
      {/*        <div className="w-14 h-14 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-6">*/}
      {/*          <Phone className="w-7 h-7 text-[#1c694b]" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-zinc-900 mb-3">*/}
      {/*          Call Us*/}
      {/*        </h3>*/}
      {/*        <p className="text-zinc-500 mb-2">Main Office</p>*/}
      {/*        <a*/}
      {/*          href="tel:+15551234567"*/}
      {/*          className="text-[#1c694b] hover:underline font-medium"*/}
      {/*        >*/}
      {/*          +1 (555) 123-4567*/}
      {/*        </a>*/}
      {/*        <p className="text-zinc-500 mt-4 mb-2">Support</p>*/}
      {/*        <a*/}
      {/*          href="tel:+15551234568"*/}
      {/*          className="text-[#1c694b] hover:underline font-medium"*/}
      {/*        >*/}
      {/*          +1 (555) 123-4568*/}
      {/*        </a>*/}
      {/*      </div>*/}

      {/*      /!* Hours Card *!/*/}
      {/*      <div className="bg-white rounded-3xl p-8 shadow-sm">*/}
      {/*        <div className="w-14 h-14 rounded-2xl bg-[#1c694b]/10 flex items-center justify-center mb-6">*/}
      {/*          <Clock className="w-7 h-7 text-[#1c694b]" />*/}
      {/*        </div>*/}
      {/*        <h3 className="text-xl font-semibold text-zinc-900 mb-3">*/}
      {/*          Business Hours*/}
      {/*        </h3>*/}
      {/*        <div className="text-zinc-500 space-y-2">*/}
      {/*          <div className="flex justify-between">*/}
      {/*            <span>Monday - Friday</span>*/}
      {/*            <span className="text-zinc-700">9AM - 6PM</span>*/}
      {/*          </div>*/}
      {/*          <div className="flex justify-between">*/}
      {/*            <span>Saturday</span>*/}
      {/*            <span className="text-zinc-700">10AM - 2PM</span>*/}
      {/*          </div>*/}
      {/*          <div className="flex justify-between">*/}
      {/*            <span>Sunday</span>*/}
      {/*            <span className="text-zinc-700">Closed</span>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <p className="text-zinc-400 text-sm mt-4">Pacific Standard Time (PST)</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* FAQ Teaser */}
      <section className="py-24 md:py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Review",
                description:
                  "We review your inquiry and learn about your business needs.",
              },
              {
                step: "02",
                title: "Connect",
                description:
                  "We schedule a conversation to discuss partnership opportunities.",
              },
              {
                step: "03",
                title: "Collaborate",
                description:
                  "We work together to establish a mutually beneficial relationship.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1c694b]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#1c694b] font-semibold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
