import { ArrowUpRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "5+", label: "Años en QA" },
  { value: "30+", label: "Proyectos Involucrado" },
  { value: "10+", label: "Herramientas Usadas" },
];

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll(".reveal")) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nodes.forEach((n, i) => {
              n.style.transitionDelay = `${i * 80}ms`;
              n.classList.add("reveal--active");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

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
          Ingeniero de Control de Calidad · QA
        </span>

        <h1
          ref={headingRef}
          className="font-display mt-8 text-balance text-6xl font-bold leading-[0.95] md:text-8xl lg:text-[9rem]"
        >
          <span className="reveal">
            <span className="reveal-inner">Calidad</span>
          </span>
          <span className="block reveal">
            <span className="reveal-inner text-foreground/15">sin defectos</span>
          </span>
          <span className="block reveal">
            <span className="reveal-inner">
              desde el día 1<span className="text-accent">.</span>
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
          Pruebas manuales, automatización, performance y procesos. Aseguro que tu producto llegue a
          producción rápido y estable.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Descargar CV
            <Download className="h-4 w-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Contactar
            <ArrowUpRight className="h-4 w-4" />
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
