import { useState, useEffect } from "react";

const navItems = [
  { name: "Experience", href: "#experience", icon: "💼" },
  { name: "Skills", href: "#skills", icon: "⚡" },
  { name: "Projects", href: "#projects", icon: "🚀" },
  { name: "About", href: "#about", icon: "👨‍💻" },
  { name: "Contact", href: "#contact", icon: "📧" },
];

export default function HeaderReact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* CSS Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            scroll-behavior: smooth;
          }

          .burger-open .line1 {
            transform: rotate(45deg) translate(4px, 4px);
          }
          
          .burger-open .line2 {
            opacity: 0;
          }
          
          .burger-open .line3 {
            transform: rotate(-45deg) translate(4px, -4px);
          }
        `,
        }}
      />

      {/* Header Navigation */}
      <header className="hidden sm:block sticky top-6 z-50 px-6">
        <div className="flex justify-end items-center">
          {/* Navigation Menu */}
          <nav
            className={`absolute right-20 -top-2 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Cloud-like background */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-white/50"></div>

            {/* Navigation items */}
            <ul className="relative flex items-center space-x-1 px-4 py-3 whitespace-nowrap">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={
                      "group relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 text-gray-700 hover:text-primary"
                    }
                  >
                    {/* Icon (visible on mobile) */}
                    <span className="text-lg md:hidden">{item.icon}</span>

                    {/* Text (visible on desktop) */}
                    <span className="hidden md:block">{item.name}</span>

                    {/* Hover background */}
                    <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className={`relative w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-white/50 flex items-center justify-center hover:bg-primary/10 transition-all duration-300 ${
              isMenuOpen ? "burger-open" : ""
            }`}
          >
            <div className="burger-icon">
              <span className="line line1 block w-5 h-0.5 bg-gray-700 transition-all duration-300"></span>
              <span className="line line2 block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300"></span>
              <span className="line line3 block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
