export function MinimumsTable() {
  const tiers = [
    {
      tier: "Standard",
      minimum: "Contact for details",
      access: "Accredited investors",
      description: "Standard access for qualified accredited investors.",
    },
    {
      tier: "IRA",
      minimum: "Contact for details",
      access: "Self-directed IRA holders",
      description: "BDCs can be held in IRAs, making regional investment accessible through retirement accounts.",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-line bg-white text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-paper-warm">
            <th className="px-6 py-4 font-medium text-ink">Tier</th>
            <th className="px-6 py-4 font-medium text-ink">Minimum</th>
            <th className="px-6 py-4 font-medium text-ink">Eligibility</th>
            <th className="px-6 py-4 font-medium text-ink">Notes</th>
          </tr>
        </thead>
        <tbody>
          {tiers.map((tier) => (
            <tr key={tier.tier} className="border-b border-line">
              <td className="px-6 py-4 font-medium text-ink">{tier.tier}</td>
              <td className="px-6 py-4 text-ink-soft">{tier.minimum}</td>
              <td className="px-6 py-4 text-ink-soft">{tier.access}</td>
              <td className="px-6 py-4 text-ink-mute">{tier.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
