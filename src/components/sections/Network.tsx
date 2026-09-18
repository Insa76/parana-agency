import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Network() {
  const { language } = useLanguage();

  const isSpanish = language === "es";

  return (
    <section
      id="network"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        {/* Creators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[0.35fr_0.65fr] md:items-end"
        >
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/40">
              02 / Creators
            </span>

            <h2 className="mt-5 max-w-md font-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.88] tracking-[-0.055em]">
              {isSpanish
                ? "Las personas también construyen la marca."
                : "People also build the brand."}
            </h2>
          </div>

          <div className="group relative aspect-[16/9] overflow-hidden bg-[#d0cec7]">
            <img
              src="/images/verticals/creators.png"
              alt={
                isSpanish
                  ? "Creadores produciendo contenido"
                  : "Creators producing content"
              }
              className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/75">
                People / Content / Influence
              </span>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--parana-accent)] transition-all duration-700 group-hover:w-full" />
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-24 border-t border-black/10 pt-8 md:mt-32"
        >
          <p className="font-display text-[clamp(2rem,4vw,4rem)] font-bold leading-[0.9] tracking-[-0.05em]">
            {isSpanish
              ? "Una red. Distintas perspectivas."
              : "One network. Different perspectives."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}