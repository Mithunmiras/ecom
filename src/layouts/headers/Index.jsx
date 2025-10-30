import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function Header() {
  const theme = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-amber-400 flex items-center justify-center text-white font-semibold">LJ</div>
          <div>
            <div className="font-semibold">LuxeJewels</div>
            <div className="text-xs text-slate-500">Fine Jewellery</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`hover:opacity-80 ${location.pathname === item.path ? "text-rose-600" : "text-slate-700"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/collections" className="px-4 py-2 bg-slate-900 text-white rounded-md">Shop</a>
          <button onClick={() => navigate('/contact')} className="px-4 py-2 border border-slate-200 rounded-md">Contact</button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen((s) => !s)}>{mobileOpen ? '✖' : '☰'}</button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <button key={item.label} onClick={() => { navigate(item.path); setMobileOpen(false); }} className="block w-full text-left py-2">{item.label}</button>
            ))}
            <a href="/collections" className="block w-full text-center bg-slate-900 text-white px-4 py-2 rounded">Shop</a>
          </div>
        </div>
      )}
    </header>
  );
}
