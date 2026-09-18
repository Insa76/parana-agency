interface SectionLabelProps {
  number: string;
  children: string;
}

function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--parana-gray)]">
      <span className="text-[var(--parana-accent)]">{number}</span>

      <span className="h-px w-8 bg-[var(--parana-line)]" />

      <span>{children}</span>
    </div>
  );
}

export default SectionLabel;