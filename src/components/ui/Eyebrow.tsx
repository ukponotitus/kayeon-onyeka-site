// components/ui/Eyebrow.tsx

export function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`font-sans text-[10px] tracking-[0.25em] uppercase ${
        light ? "text-[#FAF8F5]/50" : "text-[#C5A882]"
      }`}
    >
      {children}
    </span>
  );
}