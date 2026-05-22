// "use client";
//
// import { useState } from "react";
// import { Send, Loader2 } from "lucide-react";
//
// const categories = [
//   "Home & Living",
//   "Kitchen Essentials",
//   "Beauty & Personal Care",
//   "Outdoor & Lifestyle",
//   "Electronics Accessories",
//   "Wellness Products",
//     "Pet Supplies",
//   "Other",
// ];
//
// export function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//
//     setIsSubmitting(false);
//     setIsSubmitted(true);
//   };
//
//   if (isSubmitted) {
//     return (
//       <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
//         <div className="w-16 h-16 rounded-full bg-[#1c694b]/10 flex items-center justify-center mx-auto mb-6">
//           <Send className="w-8 h-8 text-[#1c694b]" />
//         </div>
//         <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
//           Message Sent
//         </h3>
//         <p className="text-zinc-500">
//           Thank you for reaching out. We&apos;ll get back to you within 1-2
//           business days.
//         </p>
//       </div>
//     );
//   }
//
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Name */}
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Name <span className="text-[#1c694b]">*</span>
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400"
//             placeholder="Your name"
//           />
//         </div>
//
//         {/* Company */}
//         <div>
//           <label
//             htmlFor="company"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Company <span className="text-[#1c694b]">*</span>
//           </label>
//           <input
//             type="text"
//             id="company"
//             name="company"
//             required
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400"
//             placeholder="Company name"
//           />
//         </div>
//
//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Email <span className="text-[#1c694b]">*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400"
//             placeholder="your@email.com"
//           />
//         </div>
//
//         {/* Phone */}
//         <div>
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Phone <span className="text-zinc-400">(optional)</span>
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400"
//             placeholder="+1 (555) 000-0000"
//           />
//         </div>
//
//         {/* Category */}
//         <div className="md:col-span-2">
//           <label
//             htmlFor="category"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Product Category <span className="text-[#1c694b]">*</span>
//           </label>
//           <select
//             id="category"
//             name="category"
//             required
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 bg-white"
//           >
//             <option value="">Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>
//
//         {/* Message */}
//         <div className="md:col-span-2">
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-zinc-700 mb-2"
//           >
//             Message <span className="text-[#1c694b]">*</span>
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             rows={5}
//             className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400 resize-none"
//             placeholder="Tell us about your business and how we can help..."
//           />
//         </div>
//       </div>
//
//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#1c694b]/20"
//       >
//         {isSubmitting ? (
//           <>
//             <Loader2 className="w-5 h-5 animate-spin" />
//             Sending...
//           </>
//         ) : (
//           <>
//             <Send className="w-5 h-5" />
//             Send Message
//           </>
//         )}
//       </button>
//     </form>
//   );
// }
"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const categories = [
  "Home & Living",
  "Kitchen Essentials",
  "Beauty & Personal Care",
  "Electronics Accessories",
  "Pet Supplies",
  "Other",
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      category: formData.get("category"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      e.currentTarget.reset();
    } catch {
      setError("Message was not sent. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="w-16 h-16 rounded-full bg-[#1c694b]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[#1c694b]" />
          </div>

          <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
            Message Sent
          </h3>

          <p className="text-zinc-500">
            Thank you for reaching out. We&apos;ll get back to you as soon as
            possible.
          </p>
        </div>
    );
  }

  return (
      <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
              Name <span className="text-[#1c694b]">*</span>
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-zinc-700 mb-2">
              Company <span className="text-[#1c694b]">*</span>
            </label>
            <input id="company" name="company" type="text" required placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
              Email <span className="text-[#1c694b]">*</span>
            </label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
              Phone <span className="text-zinc-400">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400" />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="category" className="block text-sm font-medium text-zinc-700 mb-2">
              Product Category <span className="text-[#1c694b]">*</span>
            </label>
            <select id="category" name="category" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 bg-white">
              <option value="">Select a category</option>
              {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
              Message <span className="text-[#1c694b]">*</span>
            </label>
            <textarea id="message" name="message" required rows={5} placeholder="Tell us about your business and how we can help..." className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-[#1c694b] focus:ring-2 focus:ring-[#1c694b]/20 outline-none transition-all text-zinc-900 placeholder:text-zinc-400 resize-none" />
          </div>
        </div>

        {error && (
            <div className="mt-6 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
        )}

        <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-[#1c694b]/20"
        >
          {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
          ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
          )}
        </button>
      </form>
  );
}