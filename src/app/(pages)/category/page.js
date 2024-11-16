"use client";

import { useEffect, useState } from "react";
import CategoryPart from "./CategoryPart";
import ProductListPart from "./ProductListPart";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const allCategorys = [
    ...new Set(allProducts?.products.map((item) => item.category)),
  ];

  const filteredCategory = allProducts?.products?.filter((item) =>
    selectedCategory ? item.category === selectedCategory : item
  );

  return (
    <section className="max-w-container mx-auto px-2.5 py-[60px] flex items-start gap-x-6">
      {isCategoryOpen && (
        <CategoryPart
          category={allCategorys}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <ProductListPart
        allProducts={allProducts}
        isLoading={isLoading}
        filteredCategory={filteredCategory}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
    </section>
  );
};

export default AllProducts;
