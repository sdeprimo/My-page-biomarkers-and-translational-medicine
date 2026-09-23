function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-b border-border py-10">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  )
}

export function About() {
  return (
    <>
      <Section title="Specialties">
        <p>
          Design, implementation, and analysis of pharmacodynamic and predictive
          biomarker endpoints for clinical and preclinical studies of drug
          candidates.
        </p>
      </Section>

      <Section title="Experience">
        <p>
          Experience working on oncology and immunology projects ranging from
          discovery stages to regulatory approval, evaluating small molecules,
          biologics, and cell therapies (CAR-T).
        </p>
      </Section>

      <Section title="Publications">
        <p>
          Publications history highlighting discovery and characterization of
          novel molecular biomarkers &mdash; both blood-based and
          tissue-associated biomarkers as correlates of mechanistic activity or
          clinical outcome.
        </p>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/?term=DePrimo-s"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
        >
          View publications on PubMed
          <span aria-hidden="true">&rarr;</span>
        </a>
      </Section>
    </>
  )
}
