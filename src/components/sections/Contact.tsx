import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="contact" className="relative flex min-h-[82vh] overflow-hidden bg-[var(--parana-black)] text-[var(--parana-white)]">
      <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(to right, var(--parana-line) 1px, transparent 1px), linear-gradient(to bottom, var(--parana-line) 1px, transparent 1px)", backgroundSize: "clamp(70px, 10vw, 160px) clamp(70px, 10vw, 160px)" }} />
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [.03, .07, .03] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--parana-accent)] blur-[140px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col justify-between px-5 py-24 md:px-8 md:py-32 lg:px-10"><div className="flex justify-between"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--parana-gray)]">09 / {es ? "Hablemos" : "Let's talk"}</span><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[var(--parana-gray)]">Paraná Agency</span></div>
        <div className="py-24"><motion.h2 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-[clamp(3.7rem,11vw,11rem)] font-bold leading-[.82] tracking-[-.07em]">{es ? "Tu próximo" : "Your next"}<span className="block text-[var(--parana-accent)]">{es ? "paso empieza acá." : "step starts here."}</span></motion.h2><p className="mt-9 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">{es ? "Contanos qué está pasando en tu negocio, qué te gustaría mejorar o qué oportunidad querés explorar." : "Tell us what is happening in your business, what you would like to improve or which opportunity you want to explore."}</p><a href="mailto:chacodevinnovation@gmail.com" className="group mt-10 inline-flex items-center gap-5 border-b border-white/25 pb-3 font-mono text-[9px] uppercase tracking-[.18em] transition-colors hover:border-[var(--parana-accent)] hover:text-[var(--parana-accent)]">chacodevinnovation@gmail.com <span className="transition-transform group-hover:translate-x-2">→</span></a></div>
        <div className="flex justify-end border-t border-[var(--parana-line)] pt-7"><p className="max-w-xl text-right font-display text-lg leading-tight tracking-[-.03em] text-[var(--parana-gray)] md:text-2xl">{es ? "Primero el problema. Después, la solución adecuada." : "First the problem. Then the right solution."}</p></div>
      </div>
    </section>
  );
}
export default Contact;
