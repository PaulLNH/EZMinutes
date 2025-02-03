// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <Link href="/">
        <span className="text-xl font-bold">EZ Minutes</span>
      </Link>
      <div>
        {session ? (
          <div className="relative inline-block">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded px-3 py-2 bg-blue-500 text-white"
            >
              {session.user.firstName}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded bg-white shadow-lg">
                <p className="p-2">Hello, {session.user.firstName}!</p>
                <button
                  onClick={() => signOut()}
                  className="w-full p-2 text-left hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="rounded px-3 py-2 bg-blue-500 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
