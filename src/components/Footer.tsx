import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-white border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Creative Sentence */}
        <div className="text-sm text-white/70 text-center md:text-left">
          Where creativity meets code — thoughtfully crafted by{" "}
          <span className="text-white font-semibold">B S Ranjith</span>
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
    </footer>
  );
};

export default Footer;
