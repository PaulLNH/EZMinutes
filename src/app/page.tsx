// src/app/page.tsx
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to EZ Minutes</h1>
        <p>Your AI-first meeting minutes solution.</p>
      </main>
    </>
  );
}
