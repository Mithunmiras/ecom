import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative w-full h-56 overflow-hidden">
        <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-3 py-1 rounded-full shadow-md">{product.tag}</span>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-medium group-hover:text-rose-600 transition-colors duration-300">{product.name}</h4>
        <div className="mt-2 flex items-center justify-between">
          <div className="font-semibold">{product.price}</div>
          <button className="text-sm text-rose-600 hover:underline hover:scale-110 transition-all duration-300">View</button>
        </div>
      </div>
    </article>
  );
}
