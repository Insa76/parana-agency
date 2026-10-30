import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { useLanguage } from "../../context/useLanguage";

function Introduction() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          label: "Por qué Paraná",
          location: "Chaco / Corrientes",
          titleLine1: "El mundo cambió.",
          titleLine2: "Las marcas también.",
          description:
            "Las personas, las comunidades y las formas de conectar cambiaron. Las marcas necesitan nuevas maneras de pensar, crear y relacionarse.",
          disciplines:
            "Identidad. Contenido. Tecnología. Comunidad. Experiencias.",
          closing: "Paraná conecta las piezas.",
        }
      : {
          label: "Why Paraná",
          location: "Chaco / Corrientes",
          titleLine1: "The world changed.",
          titleLine2: "Brands changed too.",
          description:
            "People, communities and the ways we connect have changed. Brands need new ways to think, create and build relationships.",
          disciplines: "Identity. Content. Technology. Community. Experiences.",
          closing: "Paraná connects the pieces.",
        };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--parana-white)] text-[var(--parana-black)]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 md:px-8 md:py-20">
        {/* Header */}
        <div className="flex items-start justify-between">
          <SectionLabel number="02">{t.label}</SectionLabel>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 md:block"
          >
            {t.location}
          </motion.span>
        </div>

        {/* Main statement */}
        <div className="py-14 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-[1200px] text-[clamp(3rem,7.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em]"
          >
            {t.titleLine1}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="mt-2 max-w-[1200px] text-[clamp(3rem,7.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.065em] opacity-30"
          >
            {t.titleLine2}
          </motion.h2>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 gap-10 border-t border-black/15 pt-6 md:grid-cols-12 md:gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="max-w-[360px] text-sm leading-relaxed opacity-60 md:text-base">
              {t.description}
            </p>
          </motion.div>

          {/* Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="md:col-span-5"
          >
            <p className="max-w-[500px] text-lg font-medium leading-[1.25] tracking-[-0.02em] md:text-2xl">
              {t.disciplines}
            </p>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="flex items-end md:col-span-3 md:justify-end"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--parana-black)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
                {t.closing}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
