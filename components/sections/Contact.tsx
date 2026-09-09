"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
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

function LinkedInIcon({ size = 18 }: { size?: number }) {
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

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-background" aria-hidden="true">
        <div className="contact-orbit contact-orbit-one" />
        <div className="contact-orbit contact-orbit-two" />
        <div className="contact-glow" />
      </div>

      <div className="section-container contact-container">
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker-line" />
          05 · CONTACT
        </motion.div>

        <div className="contact-main">
          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="contact-overline">LET&apos;S BUILD SOMETHING</span>

            <h2>
              Interested in working
              <span> together?</span>
            </h2>

            <p>
              I&apos;m interested in software engineering opportunities where
              challenging systems, computation, data, and real engineering
              problems intersect.
            </p>
          </motion.div>

          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <div className="contact-status">
              <div>
                <span className="availability-dot">
                  <span />
                </span>

                <div>
                  <strong>Open to opportunities</strong>
                  <span>Software · Systems · HPC · AI / Data</span>
                </div>
              </div>

              <MapPin size={17} strokeWidth={1.5} />
            </div>

            <a
              className="contact-primary"
              href="mailto:roykanishka71@gmail.com"
            >
              <div>
                <Mail size={18} strokeWidth={1.5} />

                <span>
                  <small>EMAIL</small>
                  roykanishka71@gmail.com
                </span>
              </div>

              <ArrowUpRight size={20} strokeWidth={1.4} />
            </a>

            <div className="contact-links">
              <a
                href="https://github.com/k-r-o-y"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <GitHubIcon />
                  <span>GitHub</span>
                </div>

                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/kanishka-roy-64815319b"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </div>

                <ArrowUpRight size={16} />
              </a>

              <a href="/kanishka-roy-cv.pdf">
                <div>
                  <Download size={18} strokeWidth={1.5} />
                  <span>Résumé / CV</span>
                </div>

                <ArrowRight size={16} />
              </a>
            </div>

            <div className="contact-location">
              <span>BASED ACROSS</span>
              <strong>United Kingdom / Canada</strong>
            </div>
          </motion.div>
        </div>

        <footer className="site-footer">
          <div className="footer-brand">
            KR<span>.</span>
          </div>

          <div className="footer-meta">
            <span>KANISHKA ROY</span>
            <span>SOFTWARE ENGINEER</span>
            <span>© {year}</span>
          </div>

          <a href="#top" className="back-to-top">
            BACK TO TOP
            <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
    </section>
  );
}