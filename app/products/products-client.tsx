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

export default function ProductsClient() {
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
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-zinc-50">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-sm md:text-base font-medium text-[#1c694b] uppercase tracking-wider mb-4">
                        Product Catalog
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-900 leading-tight tracking-tight mb-6">
                        Product Categories
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto">
                        Explore our curated selection of wholesale products across
                        multiple categories.
                    </p>
                </div>
            </section>

            <section className="py-8 bg-white border-b border-zinc-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryChange(category.id)}
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