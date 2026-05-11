import { SectionLabel } from "./SectionLabel";

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Por qué elegirnos</SectionLabel>
          <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
            Construido <span className="italic text-accent">diferente</span>.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            No solo encontramos bugs. Diseñamos sistemas de automatización que escalan, rinden y se mantienen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="row-span-2 rounded-2xl border border-border bg-card p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Proyectos entregados
            </div>
            <div className="font-display mt-6 text-7xl font-bold tracking-tighter md:text-8xl">
              30<span className="text-accent">+</span>
            </div>

            <div className="mt-10 rounded-xl border border-border bg-background/60 p-5 font-mono text-[12px] leading-relaxed">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-muted-foreground">main.ts</span>
              </div>
              {/* Bloque de código eliminado por solicitud del usuario */}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-display text-5xl font-bold md:text-6xl">87%</div>
            <div className="mt-3 text-sm text-muted-foreground">Reducción de tiempo automatizando pruebas.</div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-display text-3xl font-bold md:text-4xl">Disponible</span>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Para nuevos proyectos, trabajos remotos y presenciales.</div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-display text-5xl font-bold md:text-6xl">95%</div>
            <div className="mt-3 text-sm text-muted-foreground">Hasta un 95% de reducción de bugs en ambientes productivos.</div>
          </div>

          {/* <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex flex-wrap gap-2">
              {["</>", "React", "Next", "Node", "TS", "RN", "Expo"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 font-display text-2xl font-bold">Stack moderno</div>
          </div> */}

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-display text-3xl font-bold md:text-4xl">Remoto global</div>
            <div className="mt-3 text-sm text-muted-foreground">Europa · Latam · North America</div>
          </div>
        </div>
      </div>
    </section>
  );
}
