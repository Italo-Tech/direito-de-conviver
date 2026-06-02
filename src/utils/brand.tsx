/** Wraps every occurrence of "Conviver" / "CONVIVER" in the brand highlight span. */
export function hl(text: string) {
  const parts = text.split(/\b(Conviver|CONVIVER)\b/)
  return (
    <>
      {parts.map((part, i) =>
        /^conviver$/i.test(part)
          ? <span key={i} className="brand-name">{part}</span>
          : part
      )}
    </>
  )
}
