import React, { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Headphones",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Smart+Watch",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Running+Shoes",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 149.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Backpack",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Office Chair",
    price: 249.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Office+Chair",
    category: "Home & Office",
  },
  {
    id: 6,
    name: "Standing Desk",
    price: 399.99,
    imageUrl: "https://via.placeholder.com/400x300?text=Standing+Desk",
    category: "Home & Office",
  },
];

const CATEGORIES = ["Electronics", "Fashion", "Home & Office"];

export const ProductCatalogPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategories]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* NAVBAR */}
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">
              P
            </div>
            <span className="text-lg font-semibold tracking-tight">
              ProductStore
            </span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm outline-none focus:border-slate-500 focus:bg-white focus:ring-2 focus:ring-slate-200"
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                ⌘K
              </span>
            </div>
          </div>

          {/* Mobile filter toggle */}
          <button
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm md:hidden"
            onClick={() => setMobileFiltersOpen((v) => !v)}
          >
            <span>Filters</span>
            <svg
              className={`h-4 w-4 transition-transform ${
                mobileFiltersOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 8l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 gap-6 px-4 py-6">
        {/* SIDEBAR (desktop) */}
        <aside className="hidden w-56 shrink-0 md:block">
          <div className="sticky top-4 rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold tracking-tight text-slate-800">
              Categories
            </h2>
            <div className="space-y-2 text-sm">
              {CATEGORIES.map((category) => (
                <label
                  key={category}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                  />
                  <span className="text-slate-700">{category}</span>
                </label>
              ))}
            </div>

            {/* Clear filters */}
            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="mt-4 text-xs font-medium text-slate-500 hover:text-slate-700"
              >
                Clear filters
              </button>
            )}
          </div>
        </aside>

        {/* CONTENT */}
        <section className="flex-1">
          {/* Mobile filters panel */}
          {mobileFiltersOpen && (
            <div className="mb-4 rounded-xl border bg-white p-3 shadow-sm md:hidden">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold tracking-tight text-slate-800">
                  Categories
                </h2>
                {selectedCategories.length > 0 && (
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-xs font-medium text-slate-500 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {CATEGORIES.map((category) => {
                  const active = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`rounded-full border px-3 py-1 ${
                        active
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-300 bg-slate-100 text-slate-700"
                      } text-xs`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Header info */}
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Products
            </h1>
            <p className="text-xs text-slate-500">
              Showing {filteredProducts.length} of {ALL_PRODUCTS.length} items
            </p>
          </div>

          {/* PRODUCT GRID */}
          {filteredProducts.length === 0 ? (
            <div className="mt-10 rounded-xl border border-dashed bg-white/70 p-8 text-center text-sm text-slate-500">
              No products found. Try adjusting your search or filters.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group flex flex-col overflow-hidden bg-white transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-700 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-2 text-sm">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto flex items-center justify-between pt-0">
                    <span className="text-base font-semibold text-slate-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800">
                      Add to cart
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};