import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  { n: "01", title: "All Camps Kids", desc: "SaaS para gestión de campamentos con pagos integrados.", tags: ["Next.js","TypeScript","Tailwind","Supabase"] },
  { n: "02", title: "Champions Truck Repair", desc: "Sitio web de servicios con formularios y galería.", tags: ["Next.js","TypeScript","Tailwind"] },
  { n: "03", title: "Diveteca", desc: "E-commerce veterinario con pasarela de pagos y CMS.", tags: ["Next.js","TypeScript","Tailwind"] },
  { n: "04", title: "Madre Mia Store", desc: "E-commerce skincare con pagos y gestión de productos.", tags: ["Next.js","TypeScript","Tailwind"] },
  { n: "05", title: "Mykonos Greek", desc: "Comercio electrónico con admin y carrito completo.", tags: ["Next.js","Supabase","Node.js"] },
  { n: "06", title: "Textiles Studio", desc: "Tienda de textiles con recomendaciones de productos.", tags: ["Next.js","TypeScript","Tailwind"] },
];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
              Proyectos destacados.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Una selección de los proyectos más recientes, construidos con tecnologías modernas y metodologías ágiles.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.n}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-card to-background">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-7xl font-bold text-foreground/10">
                    {p.n}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.n}
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="rounded-full border border-border p-2 transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}