/**
 * Rendered automatically on every article in the `financial` category.
 */
export default function FinancialDisclaimer() {
  return (
    <aside
      role="note"
      className="not-prose my-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900"
    >
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide">Disclaimer</h4>
      <p>
        This article is commentary and analysis published by the Human Freedom Foundation for
        general information only. It is not investment, legal or tax advice, and it does not
        constitute a recommendation to buy, sell or hold any security or asset. Figures are drawn
        from public sources believed to be reliable at the time of writing but are not independently
        verified. Always do your own research and consult a qualified professional before making
        financial decisions.
      </p>
    </aside>
  );
}
