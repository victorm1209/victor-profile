/* import { SectionLabel } from "./SectionLabel";   (comentado) */

const items = [
  {
    quote:
      "Increíble trabajo en nuestro nuevo sitio web. Las ventas aumentaron un 40% desde el lanzamiento.",
    initials: "CR",
    name: "Carlos Rodríguez",
    role: "CEO, TechRetail",
  },
  {
    quote:
      "Recomiendo totalmente sus servicios. Nuestra app móvil fue desarrollada en tiempo récord.",
    initials: "MG",
    name: "María González",
    role: "Directora de Producto, FinApp",
  },
  {
    quote: "La migración de nuestro sistema legacy a una arquitectura moderna fue impecable.",
    initials: "JL",
    name: "Javier López",
    role: "CTO, DataSoft",
  },
];

export function Testimonials() {
  return null;
  return (
    <section id="testimonios" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Testimonios</SectionLabel>
          <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
            Lo que dicen nuestros clientes.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="font-display text-xl leading-snug text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-mono text-xs font-bold text-accent-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
