import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-purple-100">
        <div className="relative w-full h-64 overflow-hidden">
          <img src={product.img} alt={product.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
          {product.tag && (
            <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">{product.tag}</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-5">
          <h4 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors duration-300">{product.name}</h4>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">{product.price}</div>
            <button className="inline-flex items-center gap-1 text-sm text-purple-600 font-semibold hover:gap-2 transition-all duration-300">
              View
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
