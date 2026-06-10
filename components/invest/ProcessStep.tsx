export function ProcessStep({
  step,
  title,
  description,
  isLast = false,
}: {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper">
          {step}
        </div>
        {!isLast && <div className="mt-2 h-full w-px bg-line" />}
      </div>
      <div className={`pb-10 ${isLast ? "" : ""}`}>
        <h3 className="mb-2 font-serif text-xl text-ink">{title}</h3>
        <p className="text-sm font-light leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ProcessDiagram({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div>
      {steps.map((step, i) => (
        <ProcessStep
          key={step.title}
          step={i + 1}
          title={step.title}
          description={step.description}
          isLast={i === steps.length - 1}
        />
      ))}
    </div>
  );
}
