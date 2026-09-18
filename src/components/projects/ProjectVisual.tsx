import { motion } from "framer-motion";

interface ProjectVisualProps {
  type: "food" | "orbit" | "future";
  image?: string;
  alt?: string;
}

function ProjectVisual({
  type,
  image,
  alt = "",
}: ProjectVisualProps) {
  /*
   * REAL IMAGE MODE
   *
   * Las imágenes finales respetan la dirección visual
   * de Paraná Agency:
   *
   * - protagonista en color
   * - entorno en monocromo
   * - tratamiento fotográfico editorial
   */
  if (image) {
    return (
      <div className="group relative aspect-[16/10] overflow-hidden border border-[var(--parana-line)] bg-[#111]">
        <motion.img
          src={image}
          alt={alt}
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.035]"
        />

        {/* Cinematic image treatment */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-80 transition-opacity duration-700 group-hover:opacity-60" />

        {/* Subtle accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[var(--parana-accent)] transition-all duration-700 group-hover:w-full" />
      </div>
    );
  }

  /*
   * PLACEHOLDER MODE
   *
   * Se mantiene como fallback por si alguna imagen
   * todavía no está disponible.
   */

  return (
    <div className="group relative aspect-[16/10] overflow-hidden border border-[var(--parana-line)]">
      {type === "food" && (
        <div className="absolute inset-0 bg-[#111]">
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.28, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[5%] top-[15%] h-[55%] w-[40%] rounded-full bg-[var(--parana-accent)] blur-[110px]"
            />
          </div>

          <div className="absolute inset-[8%] border border-white/10">
            <span className="absolute left-[6%] top-[6%] font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
              Paraná Drink & Food
            </span>

            <div className="absolute bottom-[7%] left-[6%]">
              <span className="block font-display text-[clamp(3rem,7vw,8rem)] font-bold leading-[0.8] tracking-[-0.07em]">
                FOOD
              </span>

              <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
                Discover / Connect / Experience
              </span>
            </div>
          </div>
        </div>
      )}

      {type === "orbit" && (
        <div className="absolute inset-0 overflow-hidden bg-[#101010]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 aspect-square w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--parana-accent)]/30"
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="block font-display text-[clamp(3rem,7vw,8rem)] font-bold leading-none tracking-[-0.07em]">
              ORBIT
            </span>

            <span className="mt-4 block font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--parana-gray)]">
              Hospitality Technology
            </span>
          </div>

          <span className="absolute left-[8%] top-[8%] font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
            Product 02
          </span>
        </div>
      )}

      {type === "future" && (
        <div className="absolute inset-0 overflow-hidden bg-[var(--parana-accent)]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "8% 12%",
            }}
          />

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-5%] top-[-15%] h-[65%] w-[45%] rounded-full border border-black/15"
          />

          <div className="absolute bottom-[8%] left-[7%]">
            <span className="block font-display text-[clamp(3rem,8vw,9rem)] font-bold leading-[0.8] tracking-[-0.07em] text-[var(--parana-black)]">
              NEXT
            </span>

            <span className="mt-4 block font-mono text-[8px] uppercase tracking-[0.2em] text-black/50">
              In progress
            </span>
          </div>

          <span className="absolute right-[7%] top-[8%] font-mono text-[8px] uppercase tracking-[0.2em] text-black/50">
            Paraná Agency
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
    </div>
  );
}

export default ProjectVisual;