import { Code2, Server, Smartphone, Gauge, Palette, Rocket } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    desc: "Interfaces modernas y responsivas con Next.js, React y Tailwind CSS para una experiencia de usuario excepcional.",
  },
  {
    icon: Server,
    title: "Desarrollo Backend",
    desc: "APIs robustas y escalables con Node.js, Express, PostgreSQL y MongoDB para potenciar tus aplicaciones.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Mobile",
    desc: "Aplicaciones nativas y cross-platform con React Native y Expo para llegar a usuarios en todas las plataformas.",
  },
  {
    icon: Gauge,
    title: "Performance",
    desc: "Mejora la velocidad y eficiencia de tus aplicaciones existentes con auditorías y optimización de rendimiento.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    desc: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.",
  },
  {
    icon: Rocket,
    title: "Despliegue & DevOps",
    desc: "Configuración de infraestructura, CI/CD y monitoreo para mantener tus aplicaciones en producción.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Servicios</SectionLabel>
            <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
              Lo que hacemos.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Desarrollo de soluciones digitales completas, desde aplicaciones web hasta sistemas móviles, usando las tecnologías más modernas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}