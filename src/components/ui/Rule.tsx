/* Short decorative horizontal rule. */

export function Rule({ light = false }: { light?: boolean }) {
  return <div className={`w-10 h-[1px] ${light ? "bg-[#6B1E2E]" : "bg-accent"} mt-5`} />;
}
