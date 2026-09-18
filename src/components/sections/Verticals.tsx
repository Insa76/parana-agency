import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import SectionLabel from "../ui/SectionLabel";

function VerticalImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className="group relative aspect-[4/3] overflow-hidden bg-[#111]"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.035]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--parana-accent)] transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

function Verticals() {
  const { language } = useLanguage();

  const t =
    language === "es"
      ? {
          label: "05 / Dónde trabajamos",
          titleLine1: "No creemos",
          titleLine2: "en las categorías.",
          closing: "Y todo lo que venga después.",
          items: [
            {
              number: "01",
              title: "Gastronomía",
              image: null,
            },
            {
              number: "02",
              title: "Hospitalidad",
              image: "/images/verticals/hospitality.png",
            },
            {
              number: "03",
              title: "Turismo",
              image: "/images/verticals/tourism.png",
            },
            {
              number: "04",
              title: "Eventos",
              image: "/images/verticals/events.png",
            },
            {
              number: "05",
              title: "Entretenimiento",
              image: null,
            },
            {
              number: "06",
              title: "Retail",
              image: null,
            },
            {
              number: "07",
              title: "Marcas",
              image: null,
            },
          ],
        }
      : {
          label: "05 / Where we work",
          titleLine1: "We don't believe",
          titleLine2: "in categories.",
          closing: "And whatever comes next.",
          items: [
            {
              number: "01",
              title: "Gastronomy",
              image: null,
            },
            {
              number: "02",
              title: "Hospitality",
              image: "/images/verticals/hospitality.png",
            },
            {
              number: "03",
              title: "Tourism",
              image: "/images/verticals/tourism.png",
            },
            {
              number: "04",
              title: "Events",
              image: "/images/verticals/events.png",
            },
            {
              number: "05",
              title: "Entertainment",
              image: null,
            },
            {
              number: "06",
              title: "Retail",
              image: null,
            },
            {
              number: "07",
              title: "Brands",
              image: null,
            },
          ],
        };

  return (
    <section className="relative overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
        <SectionLabel number="05">{t.label.replace("05 / ", "")}</SectionLabel>

        {/* Header */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <div />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl font-display text-[clamp(3.5rem,8vw,8.5rem)] font-bold leading-[0.84] tracking-[-0.065em]"
          >
            <span className="block">{t.titleLine1}</span>

            <span className="block text-[var(--parana-gray)]">
              {t.titleLine2}
            </span>
          </motion.h2>
        </div>

        {/* Verticals */}
        <div className="mt-24 md:mt-32">
          {t.items.map((item, index) => {
            const hasImage = Boolean(item.image);

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                }}
                className={`border-t border-[var(--parana-line)] ${
                  hasImage
                    ? "grid gap-8 py-10 md:grid-cols-[0.18fr_0.47fr_0.35fr] md:items-center"
                    : "grid grid-cols-[0.18fr_1fr] items-center py-8 md:grid-cols-[0.18fr_1fr]"
                }`}
              >
                {/* Number */}
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--parana-gray)]">
                  {item.number}
                </span>

                {/* Title */}
                <h3
                  className={`font-display font-bold leading-none tracking-[-0.05em] ${
                    hasImage
                      ? "text-[clamp(2.8rem,5vw,6rem)]"
                      : "text-[clamp(3rem,7vw,8rem)]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Image */}
                {hasImage && item.image && (
                  <VerticalImage
                    src={item.image}
                    alt={item.title}
                  />
                )}
              </motion.div>
            );
          })}

          <div className="border-t border-[var(--parana-line)]" />
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32"
        >
          <p className="max-w-5xl font-display text-[clamp(2.5rem,6vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.06em]">
            {t.closing}
          </p>

          <div className="mt-10 h-px w-full bg-[var(--parana-line)]" />
        </motion.div>
      </div>
    </section>
  );
}

export default Verticals;