const TECHS = [
  "Next.js","React","React Native","TypeScript","Node.js","Tailwind CSS",
  "PostgreSQL","Supabase","Vercel","Express","MongoDB","Expo",
  "Flutter","Firebase","GraphQL","Docker",
];

export function TechMarquee() {
  const list = [...TECHS, ...TECHS];
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-card/30 py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {list.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl font-medium text-muted-foreground/70 md:text-3xl"
          >
            {t}
            <span className="ml-12 text-accent/60">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}