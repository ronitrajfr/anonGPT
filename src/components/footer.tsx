import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-gray-900- bg-black py-12 text-foreground text-white">
      <div className="container grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <img src="/logo.svg" className="h-8 w-8" />
            <span className="text-xl font-semibold">anonGPT</span>
          </Link>
          <p className="text-gray-300">
            Unlock fast and accurate information retrieval with anonGPT—no more
            endless searching. Just the essentials delivered instantly,
            providing you with concise and relevant data at your fingertips.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <Link
              href="/home"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/discover"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              Discover
            </Link>
            <Link
              href="mailto:ronitrajofficial7@gmail.com"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Resources</h4>
            <Link
              href="https://ronitt.xyz/blog"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="mailto:ronitrajofficial7@gmail.com"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              FAQ
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:underline"
              prefetch={false}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            <Link
              href="https://github.com/ronitrajfr/anonGPT"
              className="text-gray-300 hover:text-gray-200"
              prefetch={false}
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com/ronitrajfr"
              className="text-gray-300 hover:text-gray-200"
              prefetch={false}
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ronit-raj-5a80b62b4/"
              className="text-gray-300 hover:text-gray-200"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-12 max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between text-xs text-gray-300">
          <p>&copy; 2024 anonGPT. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">❤</span> by {""}
            <Link
              href="https://ronitt.xyz"
              className="underline"
              prefetch={false}
            >
              ronitt.xyz
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
export default Footer;
