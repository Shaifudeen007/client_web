import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Made with Love */}
        <div className="text-sm text-white/70 text-center md:text-left flex items-center gap-2">
          Made with

          {/* Animated Heart */}
          <svg
            className="heart"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M12 21s-6.7-4.35-9.33-7.06C.89 12.13 1 9.28 3.05 7.6c2.02-1.66 4.96-1.38 6.95.63L12 9.88l2-1.65c1.99-2.01 4.93-2.29 6.95-.63 2.05 1.68 2.16 4.53.38 6.34C18.7 16.65 12 21 12 21z"/>
          </svg>

          by <span className="text-white font-semibold">B S Ranjith</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["About", "Education", "Experience", "Awards", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/70 hover:text-[#e81cff] transition duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>
      </div>

      <div className="text-center text-xs text-white/40 pb-6">
        © {new Date().getFullYear()} All rights reserved
      </div>

      {/* Styles */}
      <style jsx>{`
        .heart {
          fill: none;
          stroke: #ff2e63;
          stroke-width: 2;
          animation: heartFill 1.6s infinite ease-in-out;
        }

        @keyframes heartFill {
          0% {
            fill: transparent;
          }
          50% {
            fill: #ff2e63;
          }
          100% {
            fill: transparent;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
