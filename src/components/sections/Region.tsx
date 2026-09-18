import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Region() {
  const { language } = useLanguage();

  const isSpanish = language === "es";

  return (
    <section
      id="region"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid min-h-[70vh] content-between gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/40">
              04 / {isSpanish ? "Origen" : "Origin"}
            </span>

            <h2 className="mt-6 max-w-4xl font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.065em]">
              {isSpanish ? (
                <>
                  Nacimos en
                  <br />
                  el Nordeste.
                </>
              ) : (
                <>
                  Born in
                  <br />
                  the Northeast.
                </>
              )}
            </h2>
          </motion.div>

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="grid gap-10 border-t border-black/10 pt-8 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div className="max-w-xl">
              <p className="text-sm leading-relaxed text-black/55 md:text-base">
                {isSpanish
                  ? "Estamos cerca de las personas, los negocios y la cultura que conocemos. Desde Chaco y Corrientes construimos para la región y para todo lo que viene después."
                  : "We are close to the people, businesses and culture we know. From Chaco and Corrientes, we build for the region and for everything that comes next."}
              </p>
            </div>

            <div className="flex items-end gap-8 md:gap-12">
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                  Coordinates
                </span>

                <span className="mt-2 block font-mono text-xs">
                  27°27′S / 58°59′W
                </span>
              </div>

              <div>
                <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                  Region
                </span>

                <span className="mt-2 block font-mono text-xs">
                  NEA / Argentina
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}