// import Image from "next/image";
// import { cn } from "@/lib/utils";
//
// interface ProductCardProps {
//   image: string;
//   name: string;
//   brand: string;
//   category: string;
//   price: string;
//   sku: string;
//   status: "Available" | "Limited" | "Coming Soon";
//   discount?: number;
//   className?: string;
// }
//
// export function ProductCard({
//   image,
//   name,
//   brand,
//   category,
//   price,
//   sku,
//   status,
//   discount,
//   className,
// }: ProductCardProps) {
//   const statusColors = {
//     Available: "bg-[#1c694b]/10 text-[#1c694b]",
//     Limited: "bg-amber-100 text-amber-700",
//     "Coming Soon": "bg-zinc-100 text-zinc-600",
//   };
//
//   return (
//     <div
//       className={cn(
//         "group bg-white rounded-3xl overflow-hidden transition-all duration-300",
//         "border border-zinc-100 hover:border-[#1c694b]/20",
//         "shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
//         "hover:-translate-y-1",
//         className
//       )}
//     >
//       {/* Image */}
//       <div className="relative aspect-square overflow-hidden bg-zinc-100">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         {/* Discount Badge */}
//         {discount && (
//           <div className="absolute top-4 right-4">
//             <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-red-500 text-white">
//               -{discount}%
//             </span>
//           </div>
//         )}
//       </div>
//
//       {/* Content */}
//       <div className="p-5">
//         {/* Brand */}
//         <span className="text-sm text-zinc-400 uppercase tracking-wide">
//           {brand}
//         </span>
//
//         {/* Product Title */}
//         <h3 className="text-lg font-semibold text-zinc-900 mt-1 mb-4 leading-snug line-clamp-2">
//           {name}
//         </h3>
//
//         {/* Price */}
//         <div className="text-xl font-bold text-zinc-900 mb-3">{price}</div>
//
//         {/* SKU */}
//         <div className="text-sm text-zinc-400 mb-3">SKU: {sku}</div>
//
//         {/* Status */}
//         <span
//           className={cn(
//             "inline-block px-3 py-1.5 text-xs font-medium rounded-full",
//             statusColors[status]
//           )}
//         >
//           {status}
//         </span>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  className?: string;
}

export function ProductCard({
                              image,
                              name,
                              brand,
                              description,
                              price,
                              className,
                            }: ProductCardProps) {
  return (
      <div
          className={cn(
              "group flex h-full min-h-[520px] flex-col overflow-hidden rounded-3xl bg-white",
              "border border-zinc-100 hover:border-[#1c694b]/20",
              "shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]",
              "transition-all duration-300 hover:-translate-y-1",
              className
          )}
      >
        <div className="relative aspect-square overflow-hidden bg-zinc-50">
          <Image
              src={`/${image}`}
              alt={name}
              fill
              className="object-contain p-5 transition-transform duration-500 rounded-3xl group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
        <span className="text-sm text-zinc-400 uppercase tracking-wide">
          {brand}
        </span>

          <h3 className="mt-1 min-h-[56px] text-lg font-semibold leading-snug text-zinc-900 line-clamp-2">
            {name}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-zinc-500 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto pt-5">
            <div className="text-xl font-bold text-zinc-900">
              ${price}
            </div>
          </div>
        </div>
      </div>
  );
}