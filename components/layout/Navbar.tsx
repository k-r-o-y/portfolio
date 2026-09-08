"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Moon, X } from "lucide-react";

/* =========================================================
   BRAND ICONS
   ========================================================= */

function GitHubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C16.3 4.7 17.3 5 17.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.1v3.3c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3v-2h-3.6V22h3.6v-7c0-1.8.3-3.6 2.6-3.6 2.3 0 2.3 2.1 2.3 3.7V22h3.7v-8.2Z" />
    </svg>
  );
}

/* =========================================================
   NAVIGATION
   ========================================================= */

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="nav-inner">
        {/* =================================================
            BRAND
            ================================================= */}

        <a className="brand" href="#top" aria-label="Kanishka Roy home">
          KR<span>.</span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* =================================================
            NAVIGATION ACTIONS
            ================================================= */}

        <div className="nav-actions">
          <a
            className="nav-icon desktop-only"
            href="https://github.com/kroyyc"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={17} />
          </a>

          <a
            className="nav-icon desktop-only"
            href="https://www.linkedin.com/in/kanishka-roy-64815319b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={17} />
          </a>

          <button
            className="nav-icon desktop-only"
            type="button"
            aria-label="Theme selector coming soon"
            title="Theme selector coming soon"
          >
            <Moon size={17} />
          </button>

          <a className="nav-contact desktop-only" href="#contact">
            Contact
            <ArrowUpRight size={15} />
          </a>

          {/* ===============================================
              MOBILE MENU BUTTON
              =============================================== */}

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
          =================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            {/* =============================================
                MOBILE SOCIAL LINKS
                ============================================= */}

            <div className="mobile-socials">
              <a
                href="https://github.com/kroyyc"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/kanishka-roy-64815319b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}