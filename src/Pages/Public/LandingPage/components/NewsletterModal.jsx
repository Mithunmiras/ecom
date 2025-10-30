import React, { useState } from "react";

export default function NewsletterModal({ onClose, onSubscribe, subscribed }) {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8 z-10">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">✕</button>

        <h3 className="text-2xl font-semibold">Join our newsletter</h3>
        <p className="mt-2 text-slate-600">Get early access to new drops, events and exclusive offers.</p>

        <form onSubmit={(e) => { e.preventDefault(); onSubscribe(); }} className="mt-4 flex flex-col sm:flex-row gap-3">
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none" />
          <button type="submit" className="px-5 py-3 bg-rose-600 text-white rounded-lg" disabled={subscribed}>{subscribed ? "Subscribed" : "Subscribe"}</button>
        </form>

        <p className="mt-3 text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
}
