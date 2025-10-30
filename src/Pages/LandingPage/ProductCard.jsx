import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-56">
        <img src={product.img} alt={product.name} className="object-cover w-full h-full" />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-3 py-1 rounded-full">{product.tag}</span>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-medium">{product.name}</h4>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-semibold">{product.price}</div>
          <button className="text-sm text-rose-600">View</button>
        </div>
      </div>
    </article>
  );
}
