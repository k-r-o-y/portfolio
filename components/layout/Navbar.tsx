"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

/* =========================================================
   TYPES
   ========================================================= */

type SectionId =
  | "about"
  | "experience"
  | "work"
  | "research"
  | "contact";

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

const links: {
  label: string;
  href: `#${SectionId}`;
  id: SectionId;
}[] = [
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    label: "Work",
    href: "#work",
    id: "work",
  },
  {
    label: "Research",
    href: "#research",
    id: "research",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

/* =========================================================
   NAVBAR
   ========================================================= */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState<SectionId | null>(null);

  /* =======================================================
     NAVBAR SCROLL STATE
     ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     ACTIVE SECTION TRACKING
     ======================================================= */

  useEffect(() => {
    const sectionElements = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sectionElements.length === 0) {
      return;
    }

    /*
     * Rather than simply checking whether a section is somewhere
     * inside the viewport, we use a reference line roughly one
     * quarter of the way down the screen.
     *
     * The section crossing this line becomes the active section.
     * This tends to feel more natural with a fixed navigation bar.
     */

    const updateActiveSection = () => {
      const navHeight = 90;

      const activationPoint =
        window.scrollY +
        navHeight +
        Math.min(window.innerHeight * 0.24, 220);

      /*
       * Before the visitor reaches About, no section is highlighted.
       */

      const firstSection = sectionElements[0];

      if (activationPoint < firstSection.offsetTop) {
        setActiveSection(null);
        return;
      }

      /*
       * Find the last section whose top has crossed our activation
       * point.
       */

      let currentSection: SectionId | null = null;

      for (const section of sectionElements) {
        if (activationPoint >= section.offsetTop) {
          currentSection = section.id as SectionId;
        }
      }

      /*
       * At the very bottom of the document, force Contact active.
       * This avoids edge cases caused by a short final section.
       */

      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (bottomReached) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /* =======================================================
     CLOSE MOBILE MENU WITH ESCAPE
     ======================================================= */

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  /* =======================================================
     CLOSE MOBILE MENU WHEN RETURNING TO DESKTOP
     ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     MOBILE MENU SCROLL LOCK
     ======================================================= */

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    /*
     * Only lock the page on narrow/mobile screens.
     */

    if (window.innerWidth <= 820) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  /* =======================================================
     SECTION LINK HANDLER
     ======================================================= */

  const handleSectionClick = (id: SectionId) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  /* =======================================================
     BRAND CLICK
     ======================================================= */

  const handleBrandClick = () => {
    setActiveSection(null);
    setMenuOpen(false);
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <motion.header
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
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

        <a
          className="brand"
          href="#top"
          aria-label="Kanishka Roy home"
          onClick={handleBrandClick}
        >
          KR<span>.</span>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={isActive ? "nav-link-active" : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleSectionClick(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* =================================================
            NAVIGATION ACTIONS
            ================================================= */}

        <div className="nav-actions">
          {/* GitHub */}

          <a
            className="nav-icon desktop-only"
            href="https://github.com/k-r-o-y"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kanishka Roy on GitHub"
            title="GitHub"
          >
            <GitHubIcon size={17} />
          </a>

          {/* LinkedIn */}

          <a
            className="nav-icon desktop-only"
            href="https://www.linkedin.com/in/kanishka-roy-64815319b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kanishka Roy on LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon size={17} />
          </a>

          {/* Theme */}

          <ThemeToggle />

          {/* Contact CTA */}

          <a
            className={`nav-contact desktop-only ${
              activeSection === "contact"
                ? "nav-contact-active"
                : ""
            }`}
            href="#contact"
            onClick={() => handleSectionClick("contact")}
          >
            Contact

            <ArrowUpRight size={15} />
          </a>

          {/* ===============================================
              MOBILE MENU BUTTON
              =============================================== */}

          <button
            className="mobile-menu-button"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="mobile-menu-icon"
                >
                  <X size={21} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="mobile-menu-icon"
                >
                  <Menu size={21} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
          =================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
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
              duration: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =============================================
                MOBILE SECTION LINKS
                ============================================= */}

            <nav aria-label="Mobile navigation">
              {links.map((link, index) => {
                const isActive =
                  activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className={
                      isActive
                        ? "mobile-nav-link-active"
                        : undefined
                    }
                    aria-current={
                      isActive ? "location" : undefined
                    }
                    onClick={() =>
                      handleSectionClick(link.id)
                    }
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.035,
                    }}
                  >
                    <span className="mobile-nav-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{link.label}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* =============================================
                MOBILE SOCIAL LINKS
                ============================================= */}

            <motion.div
              className="mobile-socials"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.15,
              }}
            >
              <a
                href="https://github.com/k-r-o-y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kanishka Roy on GitHub"
              >
                <GitHubIcon size={18} />

                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kanishka-roy-64815319b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kanishka Roy on LinkedIn"
              >
                <LinkedInIcon size={18} />

                <span>LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}