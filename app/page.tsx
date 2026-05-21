import Navbar from "@/components/shared/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Sankofa
          </h1>

          <p className="max-w-2xl text-lg text-gray-400">
            Discover, organize, and join meaningful community events.
          </p>

          <button className="mt-8 rounded-xl bg-white px-6 py-3 text-black transition hover:bg-gray-200">
            Explore Events
          </button>
        </section>
      </main>
    </>
  );
}