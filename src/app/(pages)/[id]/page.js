"use client";

import React, { useEffect, useState } from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import BottomPart from "./BottomPart";

const ProductDetails = ({params}) => {
  const { id } = params
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-container mx-auto px-2.5 py-[60px]">
      <div className="flex gap-x-10">
        <LeftPart products={products} />

        <RightPart products={products} />
      </div>

      <div className="mt-10 border-2 border-border-color rounded-lg p-7">
        <BottomPart products={products} />
      </div>
    </section>
  );
};

export default ProductDetails;
