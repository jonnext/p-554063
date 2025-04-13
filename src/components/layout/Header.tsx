import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="self-center flex w-[1327px] max-w-full items-center gap-[40px_100px] text-base font-normal tracking-[-0.32px] justify-between flex-wrap py-6">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/843c631517a24c59836d73fa224be956/987270649ff9c784ef459b21d518b4df001aa8da?placeholderIfAbsent=true"
          className="aspect-[6.06] object-contain w-[170px] self-stretch shrink-0 my-auto"
          alt="Sona Speech Therapy Logo"
        />
      </Link>
      <nav className="self-stretch flex min-w-60 items-center gap-[40px_64px] text-black whitespace-nowrap my-auto">
        <Link
          to="/"
          className="self-stretch my-auto hover:text-gray-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="self-stretch my-auto hover:text-gray-600 transition-colors"
        >
          About
        </Link>
        <Link
          to="/pricing"
          className="self-stretch my-auto hover:text-gray-600 transition-colors"
        >
          Pricing
        </Link>
      </nav>
      <Link
        to="/book"
        className="self-stretch bg-[rgba(0,78,80,1)] gap-2 text-white my-auto px-6 py-4 rounded-2xl max-md:px-5 hover:bg-[rgba(0,68,70,1)] transition-colors"
      >
        Book Consultation
      </Link>
    </header>
  );
};
