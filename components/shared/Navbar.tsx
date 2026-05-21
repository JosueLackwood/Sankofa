import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Sankofa
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/events" className="text-gray-300">
            Events
          </Link>

          <SignedOut>
            <Link
              href="/sign-in"
              className="rounded-lg bg-white px-4 py-2 text-black"
            >
              Login
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
