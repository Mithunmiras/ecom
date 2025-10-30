import React from "react";

export default function Features() {
  const features = [
    {
      title: "Bespoke Design",
      desc: "Work with our artisans to design a one-of-a-kind piece.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Ethically Sourced",
      desc: "Conflict-free stones and recycled metals when possible.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 22l8-6V6L12 2 4 6v10l8 6z" /></svg>,
      gradient: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Lifetime Care",
      desc: "Free resizing, cleaning and care on eligible purchases.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
      gradient: "from-fuchsia-500 to-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent opacity-0 animate-fadeInUp">Why LuxeJewels?</h3>
      <p className="text-slate-600 opacity-0 animate-fadeInUp animation-delay-100">Our promise: ethically made, beautifully finished, and made to last.</p>

      <div className="mt-2 grid grid-cols-1 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className={`group relative flex gap-4 p-5 rounded-2xl items-start bg-white opacity-0 animate-fadeInUp hover:shadow-xl transition-all duration-300 animation-delay-${(i + 2) * 100} border-2 border-purple-100 hover:border-purple-300`}
          >
            <div className={`bg-gradient-to-br ${f.gradient} text-white rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>{f.icon({ className: "w-6 h-6" })}</div>
            <div className="flex-1">
              <div className="font-bold text-slate-900 text-lg">{f.title}</div>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
