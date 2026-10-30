import { motion } from "framer-motion";
import { useLanguage } from "../../context/useLanguage";

function Hero() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          location: "Chaco / Corrientes / Argentina",
          type: "Agencia Creativa Independiente",
          titleLine1: "Construimos",
          titleLine2: "lo que",
          titleLine3: "viene.",
          description:
            "Marketing, creatividad, tecnología y experiencias para marcas que quieren avanzar.",
          scroll: "Desplazar",
        }
      : {
          location: "Chaco / Corrientes / Argentina",
          type: "Independent Creative Agency",
          titleLine1: "We build",
          titleLine2: "what comes",
          titleLine3: "next.",
          description:
            "Marketing, creativity, technology and experiences for brands that want to move forward.",
          scroll: "Scroll",
        };

  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]"
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero/hero.png"
          alt=""
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Dark cinematic treatment */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Bottom gradient for typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/25" />

        {/* Slight green atmospheric accent */}
        <div className="absolute right-[-10%] top-[5%] h-[55vw] w-[55vw] rounded-full bg-[var(--parana-accent)] opacity-[0.045] blur-[140px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--parana-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--parana-line) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(60px, 8vw, 140px) clamp(60px, 8vw, 140px)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between px-5 pb-8 pt-32 md:px-8 md:pb-10 lg:px-10 lg:pt-36">
        {/* Metadata */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
            {t.location}
          </span>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/60 sm:block">
            {t.type}
          </span>
        </div>

        {/* Main */}
        <div className="mt-auto max-w-[1100px] pb-[8vh] pt-[18vh]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[clamp(4rem,11vw,11rem)] font-bold leading-[0.82] tracking-[-0.065em]"
          >
            <span className="block">{t.titleLine1}</span>

            <span className="block">{t.titleLine2}</span>

            <span className="block text-[var(--parana-accent)]">
              {t.titleLine3}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mt-10 max-w-xl text-sm leading-relaxed text-white/65 md:text-base"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Scroll */}
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-px bg-[var(--parana-accent)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/60">
              {t.scroll}
            </span>
          </div>

          <span className="font-mono text-[8px] tracking-[0.2em] text-white/60">
            01
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
