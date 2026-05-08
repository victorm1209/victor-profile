import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "70+", label: "Proyectos" },
  { value: "50+", label: "Clientes" },
  { value: "100%", label: "Dedicación" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Agencia de desarrollo web & mobile
        </span>

        <h1 className="font-display mt-8 text-balance text-6xl font-bold leading-[0.95] md:text-8xl lg:text-[9rem]">
          Artesanos
          <span className="block text-foreground/15">en la era</span>
          <span className="block">de la IA<span className="text-accent">.</span></span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
          Convertimos tu idea en un producto digital que genera resultados reales.
          Rápido, bien diseñado y construido para crecer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Ver proyectos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Contactar
          </a>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-16">
              <div className="text-center">
                <div className="font-display text-4xl font-bold md:text-5xl">{s.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && <div className="hidden h-12 w-px bg-border md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}