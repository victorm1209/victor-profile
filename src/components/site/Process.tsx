import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    desc: "Analizamos tus necesidades, objetivos y audiencia para definir la estrategia perfecta.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Creamos wireframes y prototipos interactivos centrados en la experiencia del usuario.",
  },
  {
    n: "03",
    title: "Desarrollo",
    desc: "Construimos tu producto con código limpio, pruebas y las mejores prácticas.",
  },
  {
    n: "04",
    title: "Lanzamiento",
    desc: "Desplegamos, monitoreamos y optimizamos para asegurar un rendimiento impecable.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Proceso</SectionLabel>
          <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
            Cómo trabajamos.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Un proceso claro y transparente de principio a fin, diseñado para entregar resultados
            excepcionales.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-8">
              <div className="font-display text-5xl font-bold text-accent">{s.n}</div>
              <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
