import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20">
      <div
        className="
        max-w-7xl mx-auto
        grid gap-10

        /* MOBILE: 1 column */
        grid-cols-1 text-center

        /* TABLET: 2 columns */
        md:grid-cols-2 md:text-left md:items-start

        /* DESKTOP: 3 columns */
        lg:grid-cols-3
      "
      >
        {/* Logo & Description + Copyright for desktop & tablet */}
        <div
          className="
          flex flex-col justify-between h-full
          /* Mobile center */
          items-center

          /* Tablet & Desktop left align */
          md:items-start
        "
        >
          {/* Logo */}
          <h2 className="text-xl font-bold mb-4">audiophile</h2>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-8 max-w-sm md:max-w-none">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility – we’re open 7 days a week.
          </p>

          <p
            className="text-xs text-gray-500 
            /* Mobile center */
            text-center md:text-left
            /* Push to bottom on desktop/tablet */
            mt-auto
          "
          >
            Copyright 2021. All Rights Reserved
          </p>
        </div>

        {/* Nav Links */}
        <nav
          className="
          flex flex-col gap-2

          /* Mobile center */
          items-center

          /* Tablet & Desktop left align */
          md:items-start
        "
        >
          <a href="/" className="uppercase text-sm hover:text-[#D87D4A]">
            Home
          </a>
          <a
            href="/headphones"
            className="uppercase text-sm hover:text-[#D87D4A]"
          >
            Headphones
          </a>
          <a
            href="/speakers"
            className="uppercase text-sm hover:text-[#D87D4A]"
          >
            Speakers
          </a>
          <a
            href="/earphones"
            className="uppercase text-sm hover:text-[#D87D4A]"
          >
            Earphones
          </a>
        </nav>

        {/* Social Icons */}
        <div
          className="
          flex gap-4 

          /* Mobile center */
          justify-center 

          /* Tablet: place on right column, bottom right align */
          md:justify-end md:items-end

          /* Desktop: left aligned under nav links */
          lg:justify-start lg:items-start
        "
        >
          <a href="#" aria-label="Facebook">
            <Facebook className="hover:text-[#D87D4A]" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="hover:text-[#D87D4A]" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="hover:text-[#D87D4A]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
