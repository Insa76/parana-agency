import { motion } from "framer-motion";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function RevealText({
  children,
  delay = 0,
  className = "",
}: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealText;