// src/app/page.tsx
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="hero bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">EZ Minutes</h1>
            <p className="text-xl mb-8">
              Effortlessly create, edit, and share your meeting minutes with AI-powered efficiency.
            </p>
            <a
              href="/login"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-200 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="features py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why EZ Minutes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-item text-center">
                <svg
                  className="mx-auto h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Document Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m10 0v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5"
                  />
                </svg>
                <h3 className="text-xl font-semibold mt-4">AI-Powered</h3>
                <p className="mt-2 text-gray-600">Automate your meeting minutes and save time.</p>
              </div>
              <div className="feature-item text-center">
                <svg
                  className="mx-auto h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Collaboration Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mt-4">Collaborative</h3>
                <p className="mt-2 text-gray-600">
                  Easily share and collaborate on meeting minutes.
                </p>
              </div>
              <div className="feature-item text-center">
                <svg
                  className="mx-auto h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Efficiency Icon */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3"
                  />
                </svg>
                <h3 className="text-xl font-semibold mt-4">Efficient</h3>
                <p className="mt-2 text-gray-600">
                  Streamline your meeting workflow with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
