import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    n: "01",
    title: "Soluciones Financieras Chinchin",
    desc: "Plataforma de billetera digital y finanzas personales diseñada para facilitar pagos electrónicos y la gestión del dinero de forma rápida y segura.",
    tags: ["Angular", "Bootstrap", "AI", "TypeScript"],
    url: "https://www.pagochinchin.com/",
    preview: "/chinchin.png",
  },
  {
    n: "02",
    title: "Helados Ya",
    desc: "Aplicación de entrega a domicilio que ofrece un catálogo interactivo para agilizar la compra y distribución de helados.",
    tags: ["React", "Tailwind", "AI"],
    url: "https://heladosya.netlify.app/",
    preview: "/heladosya.png",
  },
  {
    n: "03",
    title: "Bodega Osman",
    desc: "Tienda en línea para la venta de snacks, con un flujo de compra intuitivo para el usuario.",
    tags: ["React", "Tailwind", "AI"],
    url: "https://bodega-osman.vercel.app/",
    preview: "/bodegaosman.png",
  },
  {
    n: "04",
    title: "Business Soluciones Financieras Chinchin",
    desc: "Portal corporativo y pasarela de pagos para empresas, enfocado en la gestión de cobros masivos, conciliación bancaria y administración de puntos de venta virtuales.",
    tags: ["Angular", "Bootstrap", "AI", "TypeScript"],
    url: "https://business.pagochinchin.com/auth/login",
    preview: "/business.png",
  },
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
            Una selección de los proyectos más recientes, revisados con tecnologías modernas y
            metodologías ágiles.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.n}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              {/* Preview de la imagen */}
              <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-secondary via-card to-background">
                <img
                  src={p.preview}
                  alt={`Preview de ${p.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
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