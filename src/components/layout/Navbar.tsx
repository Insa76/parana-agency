import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = language === "es"
    ? { work: "Proyectos", about: "Qué impulsamos", solutions: "Soluciones", sectors: "Sectores", contact: "Hablemos" }
    : { work: "Projects", about: "What we improve", solutions: "Solutions", sectors: "Sectors", contact: "Let's talk" };
  const links = [
    { label: t.about, href: "#about" },
    { label: t.solutions, href: "#solutions" },
    { label: t.work, href: "#work" },
    { label: t.sectors, href: "#sectors" },
  ];
  const closeMenu = () => setMenuOpen(false);
  const languageSwitch = (mobile = false) => (
    <div className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] ${mobile ? "" : "ml-2"}`}>
      <button type="button" onClick={() => setLanguage("es")} className={language === "es" ? "text-[var(--parana-white)]" : "text-[var(--parana-gray)] hover:text-[var(--parana-white)]"} aria-label="Cambiar a español">ES</button>
      <span className="text-[var(--parana-line)]">/</span>
      <button type="button" onClick={() => setLanguage("en")} className={language === "en" ? "text-[var(--parana-white)]" : "text-[var(--parana-gray)] hover:text-[var(--parana-white)]"} aria-label="Switch to English">EN</button>
    </div>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-5 md:px-8 lg:px-10">
        <a href="#top" onClick={closeMenu} className="group flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-[-0.04em] text-[var(--parana-white)]">PARANÁ</span>
          <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-[var(--parana-gray)]">Agency</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(link => <a key={link.href} href={link.href} className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--parana-gray)] transition-colors hover:text-[var(--parana-white)]">{link.label}</a>)}
          <a href="#contact" className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--parana-white)] transition-colors hover:text-[var(--parana-accent)]">{t.contact}</a>
          {languageSwitch()}
        </div>
        <div className="flex items-center gap-5 md:hidden">
          {languageSwitch(true)}
          <button type="button" onClick={() => setMenuOpen(v => !v)} className="relative flex h-8 w-8 items-center justify-center" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
            <span className="absolute h-px w-5 bg-[var(--parana-white)]" />
            <span className={`absolute h-px w-5 bg-[var(--parana-white)] transition-transform ${menuOpen ? "rotate-90" : "translate-y-2"}`} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="absolute inset-x-0 top-20 border-b border-[var(--parana-line)] bg-[var(--parana-black)] md:hidden">
          <div className="flex flex-col px-5 pb-8 pt-4">
            {links.map((link, i) => <motion.a key={link.href} href={link.href} onClick={closeMenu} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }} className="border-b border-[var(--parana-line)] py-5 font-display text-2xl text-[var(--parana-white)]">{link.label}</motion.a>)}
            <a href="#contact" onClick={closeMenu} className="pt-5 font-display text-2xl text-[var(--parana-accent)]">{t.contact}</a>
          </div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
export default Navbar;
