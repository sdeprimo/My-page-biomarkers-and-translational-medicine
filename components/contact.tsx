export function Contact() {
  return (
    <section className="py-10">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
        How to reach me
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://linkedin.com/in/sam-deprimo-7091841"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Connect on LinkedIn
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a
          href="https://biomarker-nexus.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Visit my website
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}
