export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          Sankofa
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    </nav>
  );
}