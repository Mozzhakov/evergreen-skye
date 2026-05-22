// "use client";
//
// import { useState, useEffect, useMemo } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { ProductCard } from "@/components/product-card";
// import { SectionHeader } from "@/components/section-header";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";
//
// const categories = [
//   { id: "all", label: "All" },
//   { id: "home-living", label: "Home & Living" },
//   { id: "kitchen-essentials", label: "Kitchen Essentials" },
//   { id: "beauty-personal-care", label: "Beauty & Personal Care" },
//   { id: "outdoor-lifestyle", label: "Outdoor & Lifestyle" },
//   { id: "electronics-accessories", label: "Electronics Accessories" },
//   { id: "wellness-products", label: "Wellness Products" },
// ];
//
// const products = [
//   {
//     id: 1,
//     image: "/images/products/home-living.jpg",
//     name: "Artisan Ceramic Vase Set",
//     brand: "Evergreen Home",
//     category: "home-living",
//     price: "$49.99",
//     sku: "ES-1001",
//     status: "Available" as const,
//     discount: 15,
//   },
//   {
//     id: 2,
//     image: "/images/products/home-living.jpg",
//     name: "Premium Linen Throw Collection",
//     brand: "Nordic Living",
//     category: "home-living",
//     price: "$89.99",
//     sku: "ES-1002",
//     status: "Available" as const,
//   },
//   {
//     id: 3,
//     image: "/images/products/kitchen.jpg",
//     name: "Nordic Dinnerware Set",
//     brand: "Scandinavian Kitchen",
//     category: "kitchen-essentials",
//     price: "$129.99",
//     sku: "ES-2001",
//     status: "Available" as const,
//     discount: 20,
//   },
//   {
//     id: 4,
//     image: "/images/products/kitchen.jpg",
//     name: "Bamboo Kitchen Organizer",
//     brand: "EcoHome",
//     category: "kitchen-essentials",
//     price: "$34.99",
//     sku: "ES-2002",
//     status: "Limited" as const,
//   },
//   {
//     id: 5,
//     image: "/images/products/beauty.jpg",
//     name: "Botanical Skincare Set",
//     brand: "Pure Botanics",
//     category: "beauty-personal-care",
//     price: "$79.99",
//     sku: "ES-3001",
//     status: "Available" as const,
//   },
//   {
//     id: 6,
//     image: "/images/products/beauty.jpg",
//     name: "Essential Oil Diffuser Kit",
//     brand: "Aromatherapy Co",
//     category: "beauty-personal-care",
//     price: "$54.99",
//     sku: "ES-3002",
//     status: "Available" as const,
//     discount: 10,
//   },
//   {
//     id: 7,
//     image: "/images/products/outdoor.jpg",
//     name: "Trail Explorer Backpack",
//     brand: "Wilderness Gear",
//     category: "outdoor-lifestyle",
//     price: "$149.99",
//     sku: "ES-4001",
//     status: "Available" as const,
//   },
//   {
//     id: 8,
//     image: "/images/products/outdoor.jpg",
//     name: "Camping Essentials Bundle",
//     brand: "OutdoorPro",
//     category: "outdoor-lifestyle",
//     price: "$199.99",
//     sku: "ES-4002",
//     status: "Limited" as const,
//     discount: 30,
//   },
//   {
//     id: 9,
//     image: "/images/products/electronics.jpg",
//     name: "Wireless Charging Station",
//     brand: "TechNova",
//     category: "electronics-accessories",
//     price: "$39.99",
//     sku: "ES-5001",
//     status: "Available" as const,
//   },
//   {
//     id: 10,
//     image: "/images/products/electronics.jpg",
//     name: "Premium Audio Accessories",
//     brand: "SoundCraft",
//     category: "electronics-accessories",
//     price: "$69.99",
//     sku: "ES-5002",
//     status: "Coming Soon" as const,
//   },
//   {
//     id: 11,
//     image: "/images/products/wellness.jpg",
//     name: "Meditation Starter Kit",
//     brand: "ZenLife",
//     category: "wellness-products",
//     price: "$59.99",
//     sku: "ES-6001",
//     status: "Available" as const,
//     discount: 25,
//   },
//   {
//     id: 12,
//     image: "/images/products/wellness.jpg",
//     name: "Yoga & Wellness Collection",
//     brand: "MindBody",
//     category: "wellness-products",
//     price: "$99.99",
//     sku: "ES-6002",
//     status: "Available" as const,
//   },
// ];
//
// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const categoryParam = searchParams.get("category");
//   const [products, setProducts] = useState([]);
//   const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
//
//   useEffect(() => {
//     setActiveCategory(categoryParam || "all");
//   }, [categoryParam]);
//
//   // fetch products
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await fetch(
//             "https://dummyjson.com/products"
//         );
//         const data = await response.json();
//         const fakeProducts = data.products;
//         setProducts(fakeProducts);
//         console.log("fakeProducts:", fakeProducts);
//         setProducts(fakeProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//
//     getProducts();
//   }, []);
//
//   useEffect(() => {
//     setActiveCategory(categoryParam || "all");
//   }, [categoryParam]);
//
//   const handleCategoryChange = (categoryId: string) => {
//     setActiveCategory(categoryId);
//     if (categoryId === "all") {
//       router.push("/products", { scroll: false });
//     } else {
//       router.push(`/products?category=${categoryId}`, { scroll: false });
//     }
//   };
//
//   const filteredProducts = useMemo(() => {
//     if (activeCategory === "all") {
//       return products;
//     }
//     return products.filter((product) => product.category === activeCategory);
//   }, [activeCategory]);
//
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-zinc-50">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
//             Product Catalog
//           </p>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight text-balance mb-6">
//             Product Categories
//           </h1>
//           <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
//             Explore our curated selection of wholesale products across multiple
//             categories. Contact us for detailed pricing and availability.
//           </p>
//         </div>
//       </section>
//
//       {/* Category Filters */}
//       <section className="py-8 bg-white border-b border-zinc-100 sticky top-20 z-40">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-wrap items-center justify-center gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => handleCategoryChange(category.id)}
//                 className={cn(
//                   "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
//                   activeCategory === category.id
//                     ? "bg-[#1c694b] text-white shadow-lg shadow-[#1c694b]/20"
//                     : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
//                 )}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>
//
//       {/* Products Grid */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 image={product.image}
//                 name={product.name}
//                 brand={product.brand}
//                 category={product.category}
//                 price={product.price}
//                 sku={product.sku}
//                 status={product.status}
//                 discount={product.discount}
//               />
//             ))}
//           </div>
//
//           {filteredProducts.length === 0 && (
//             <div className="text-center py-16">
//               <p className="text-lg text-zinc-500">
//                 No products found in this category.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//
//       {/* CTA Section */}
//       <section className="py-24 md:py-32 bg-zinc-50">
//         <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
//           <SectionHeader
//             title="Interested in Our Products?"
//             subtitle="Contact us to learn more about wholesale pricing, minimum orders, and partnership opportunities."
//           />
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 mt-10 px-8 py-4 text-base font-medium rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/20"
//           >
//             Get in Touch
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import products from "@/lib/products.json";

const categories = [
  { id: "all", label: "All" },
  { id: "home-living", label: "Home & Living" },
  { id: "kitchen-essentials", label: "Kitchen Essentials" },
  { id: "beauty-personal-care", label: "Beauty & Personal Care" },
  { id: "pet-supplies", label: "Pet Supplies" },
  { id: "electronics-accessories", label: "Electronics Accessories" },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
      categoryParam || "all"
  );

  useEffect(() => {
    setActiveCategory(categoryParam || "all");
  }, [categoryParam]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      router.push("/products", {
        scroll: false,
      });
    } else {
      router.push(`/products?category=${categoryId}`, {
        scroll: false,
      });
    }
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter(
        (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  return (
      <>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
              Product Catalog
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight mb-6">
              Product Categories
            </h1>

            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
              Explore our curated selection of wholesale products
              across multiple categories.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b border-zinc-100 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">

              {categories.map((category) => (
                  <button
                      key={category.id}
                      onClick={() =>
                          handleCategoryChange(category.id)
                      }
                      className={cn(
                          "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",

                          activeCategory === category.id
                              ? "bg-[#1c694b] text-white shadow-lg shadow-[#1c694b]/20"
                              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                      )}
                  >
                    {category.label}
                  </button>
              ))}

            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

              {filteredProducts.map((product) => (
                  <ProductCard
                      key={product.name}
                      image={product.image}
                      name={product.name}
                      brand={product.brand}
                      category={product.category}
                      description={product.description}
                      price={product.price}
                      className="h-full"
                  />
              ))}

            </div>

            {!filteredProducts.length && (
                <div className="py-16 text-center">
                  <p className="text-lg text-zinc-500">
                    No products found in this category
                  </p>
                </div>
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

            <SectionHeader
                title="Interested in Our Products?"
                subtitle="Contact us to learn more about pricing and partnership opportunities."
            />

            <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-[#1c694b] text-white hover:bg-[#165a3f] transition-colors shadow-lg shadow-[#1c694b]/20"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </section>
      </>
  );
}