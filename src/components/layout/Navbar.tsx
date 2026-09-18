import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = language === "es"
    ? {
        work: "Trabajo",
        about: "Nosotros",
        network: "Red",
        contact: "Hablemos",
      }
    : {
        work: "Work",
        about: "About",
        network: "Network",
        contact: "Let's talk",
      };

  const links = [
    { label: t.work, href: "#work" },
    { label: t.about, href: "#about" },
    { label: t.network, href: "#network" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-5 md:px-8 lg:px-10">
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex flex-col leading-none"
        >
          <span className="font-display text-lg font-bold tracking-[-0.04em] text-[var(--parana-white)]">
            PARANÁ
          </span>

          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-[var(--parana-gray)]">
            Agency
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--parana-gray)] transition-colors duration-300 hover:text-[var(--parana-white)]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--parana-white)] transition-colors duration-300 hover:text-[var(--parana-accent)]"
          >
            {t.contact}
          </a>

          {/* Language */}
          <div className="ml-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={`transition-colors ${
                language === "es"
                  ? "text-[var(--parana-white)]"
                  : "text-[var(--parana-gray)] hover:text-[var(--parana-white)]"
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>

            <span className="text-[var(--parana-line)]">/</span>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition-colors ${
                language === "en"
                  ? "text-[var(--parana-white)]"
                  : "text-[var(--parana-gray)] hover:text-[var(--parana-white)]"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-5 md:hidden">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em]">
            <button
              type="button"
              onClick={() => setLanguage("es")}
              className={
                language === "es"
                  ? "text-[var(--parana-white)]"
                  : "text-[var(--parana-gray)]"
              }
            >
              ES
            </button>

            <span className="text-[var(--parana-line)]">/</span>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "text-[var(--parana-white)]"
                  : "text-[var(--parana-gray)]"
              }
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative flex h-8 w-8 items-center justify-center"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="absolute h-px w-5 bg-[var(--parana-white)] transition-transform duration-300" />

            <span
              className={`absolute h-px w-5 bg-[var(--parana-white)] transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-20 border-b border-[var(--parana-line)] bg-[var(--parana-black)] md:hidden"
          >
            <div className="flex flex-col px-5 pb-8 pt-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[var(--parana-line)] py-5 font-display text-2xl font-medium tracking-[-0.03em] text-[var(--parana-white)]"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-5 font-display text-2xl font-medium tracking-[-0.03em] text-[var(--parana-accent)]"
              >
                {t.contact}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;