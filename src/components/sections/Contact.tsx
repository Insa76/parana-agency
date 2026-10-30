import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";

function Contact() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          label: "08 / Hablemos",
          titleLine1: "Construyamos",
          titleLine2: "algo.",
          cta: "Empezar una conversación",
          email: "hola@parana.agency",
          closing: "Paraná es un lugar. Pero también es una forma de avanzar.",
        }
      : {
          label: "08 / Let's talk",
          titleLine1: "Let's build",
          titleLine2: "something.",
          cta: "Start a conversation",
          email: "hola@parana.agency",
          closing: "Paraná is a place. But it's also a way forward.",
        };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--parana-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--parana-line) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(70px, 10vw, 160px) clamp(70px, 10vw, 160px)",
        }}
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--parana-accent)] blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
            {t.label}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
            2026
          </span>
        </div>

        {/* Main CTA */}
        <div className="relative flex flex-1 items-center py-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 font-display text-[clamp(4rem,12vw,13rem)] font-bold leading-[0.78] tracking-[-0.07em]"
            >
              <span className="block">{t.titleLine1}</span>

              <span className="block text-[var(--parana-accent)]">
                {t.titleLine2}
              </span>
            </motion.h2>

            <motion.a
              href={`mailto:${t.email}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group mt-12 inline-flex items-center gap-5 border-b border-[var(--parana-line)] pb-3"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-white)] transition-colors duration-300 group-hover:text-[var(--parana-accent)]">
                {t.cta}
              </span>

              <span className="text-[var(--parana-gray)] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </motion.a>

            <p className="mt-4 font-mono text-[9px] tracking-[0.12em] text-[var(--parana-gray)]">
              {t.email}
            </p>
          </div>

          {/* Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute right-[-15%] top-1/2 hidden aspect-square w-[48vw] -translate-y-1/2 rounded-full border border-[var(--parana-line)] lg:block"
          >
            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--parana-accent)]" />
          </motion.div>
        </div>

        {/* Closing */}
        <div className="flex justify-end border-t border-[var(--parana-line)] pt-8">
          <p className="max-w-xl text-right font-display text-xl leading-tight tracking-[-0.03em] text-[var(--parana-gray)] md:text-2xl">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
