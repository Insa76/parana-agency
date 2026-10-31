import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const es = language === "es";
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--parana-black)] text-[var(--parana-white)]"><div className="mx-auto max-w-[1800px] px-5 pb-8 pt-14 md:px-8 lg:px-10"><div className="grid gap-10 border-t border-[var(--parana-line)] pt-10 md:grid-cols-4"><div className="md:col-span-2"><a href="#top" className="inline-flex flex-col leading-none"><span className="font-display text-3xl font-bold tracking-[-.05em]">PARANÁ</span><span className="mt-2 font-mono text-[8px] uppercase tracking-[.22em] text-[var(--parana-gray)]">Agency</span></a><p className="mt-7 max-w-sm text-sm leading-relaxed text-[var(--parana-gray)]">{es ? "Estrategia, tecnología e innovación para empresas y comercios." : "Strategy, technology and innovation for businesses."}</p></div><div><span className="font-mono text-[8px] uppercase tracking-[.18em] text-[var(--parana-gray)]">{es ? "Explorar" : "Explore"}</span><div className="mt-5 flex flex-col gap-3 text-sm"><a href="#about" className="w-fit hover:text-[var(--parana-accent)]">{es ? "Qué nos mueve" : "About"}</a><a href="#solutions" className="w-fit hover:text-[var(--parana-accent)]">{es ? "Soluciones" : "Solutions"}</a><a href="#work" className="w-fit hover:text-[var(--parana-accent)]">{es ? "Proyectos" : "Projects"}</a></div></div><div><span className="font-mono text-[8px] uppercase tracking-[.18em] text-[var(--parana-gray)]">{es ? "Contacto" : "Contact"}</span><div className="mt-5 flex flex-col gap-3 text-sm"><a href="mailto:hola@parana.agency" className="w-fit hover:text-[var(--parana-accent)]">hola@parana.agency</a><a href="#contact" className="w-fit hover:text-[var(--parana-accent)]">{es ? "Hablemos" : "Let's talk"}</a></div></div></div><div className="mt-16 flex flex-col gap-3 border-t border-[var(--parana-line)] pt-5 font-mono text-[8px] uppercase tracking-[.16em] text-[var(--parana-gray)] md:flex-row md:justify-between"><span>© {year} Paraná Agency</span><span>Chaco / Corrientes / Argentina</span></div></div></footer>
  );
}
export default Footer;
