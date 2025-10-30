import React from "react";

export default function Features() {
  const features = [
    {
      title: "Bespoke Design",
      desc: "Work with our artisans to design a one-of-a-kind piece.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z" /></svg>,
    },
    {
      title: "Ethically Sourced",
      desc: "Conflict-free stones and recycled metals when possible.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 22l8-6V6L12 2 4 6v10l8 6z" /></svg>,
    },
    {
      title: "Lifetime Care",
      desc: "Free resizing, cleaning and care on eligible purchases.",
      icon: (props) => <svg {...props} viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 6l4 8H8l4-8z" /></svg>,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <h3 className="text-xl font-semibold">Why LuxeJewels?</h3>
      <p className="text-slate-600">Our promise: ethically made, beautifully finished, and made to last.</p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 p-4 border rounded-lg items-start bg-white">
            <div className="bg-rose-50 text-rose-600 rounded-lg p-3">{f.icon({ className: "w-5 h-5" })}</div>
            <div>
              <div className="font-semibold">{f.title}</div>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
