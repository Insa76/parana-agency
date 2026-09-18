import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          explore: "Explorar",
          contact: "Contacto",
          work: "Trabajo",
          about: "Nosotros",
          network: "Red",
          talk: "Hablemos",
          location: "Construido desde el Nordeste",
        }
      : {
          explore: "Explore",
          contact: "Contact",
          work: "Work",
          about: "About",
          network: "Network",
          talk: "Let's talk",
          location: "Built from the Northeast",
        };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="mx-auto max-w-[1800px] px-5 pb-8 pt-16 md:px-8 lg:px-10">
        <div className="grid gap-12 border-t border-[var(--parana-line)] pt-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#top"
              className="inline-flex flex-col leading-none"
            >
              <span className="font-display text-3xl font-bold tracking-[-0.05em]">
                PARANÁ
              </span>

              <span className="mt-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[var(--parana-gray)]">
                Agency
              </span>
            </a>

            <p className="mt-8 max-w-sm font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--parana-gray)]">
              {t.location}
            </p>
          </div>

          {/* Explore */}
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
              {t.explore}
            </span>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#work"
                className="w-fit text-sm transition-colors hover:text-[var(--parana-accent)]"
              >
                {t.work}
              </a>

              <a
                href="#about"
                className="w-fit text-sm transition-colors hover:text-[var(--parana-accent)]"
              >
                {t.about}
              </a>

              <a
                href="#network"
                className="w-fit text-sm transition-colors hover:text-[var(--parana-accent)]"
              >
                {t.network}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
              {t.contact}
            </span>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:hola@parana.agency"
                className="w-fit text-sm transition-colors hover:text-[var(--parana-accent)]"
              >
                hola@parana.agency
              </a>

              <a
                href="#contact"
                className="w-fit text-sm transition-colors hover:text-[var(--parana-accent)]"
              >
                {t.talk}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--parana-line)] pt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--parana-gray)] md:flex-row md:items-center md:justify-between">
          <span>© {year} Paraná Agency</span>

          <span>Chaco / Corrientes / Argentina</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;