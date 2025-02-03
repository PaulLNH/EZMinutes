// src/app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome, {session?.user.firstName}!</p>
      </main>
    </>
  );
}
