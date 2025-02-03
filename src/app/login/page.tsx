// src/app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Login</h2>
        <button
          onClick={() => signIn("google")}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Continue with Google
        </button>
      </main>
    </>
  );
}
