export function Contact() {
  return (
    <section className="py-10">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
        How to reach me
      </h2>
      <a
        href="https://linkedin.com/in/sam-deprimo-7091841"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Connect on LinkedIn
        <span aria-hidden="true">&rarr;</span>
      </a>
    </section>
  )
}
