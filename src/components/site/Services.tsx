import { ClipboardCheck, Bot, Gauge, ShieldCheck, Workflow, Bug } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    icon: ClipboardCheck,
    title: "Pruebas Manuales",
    desc: "Diseño de casos de prueba, exploratorias, regresión y UAT con cobertura funcional y de criterios de aceptación.",
  },
  {
    icon: Bot,
    title: "Automatización",
    desc: "Frameworks de automatización con Selenium, Cypress y Playwright. Integración continua y reportes claros.",
  },
  {
    icon: Bug,
    title: "Pruebas de API",
    desc: "Validación de endpoints REST y SOAP con Postman, RestAssured y SoapUI; contratos y datos verificados.",
  },
  {
    icon: Gauge,
    title: "Performance & Carga",
    desc: "Pruebas de stress y carga con JMeter y K6 para garantizar estabilidad bajo demanda real.",
  },
  {
    icon: ShieldCheck,
    title: "QA de Procesos",
    desc: "Mejora continua, definición de DoD/DoR, métricas, planes de prueba y gestión de defectos en Jira/TestRail.",
  },
  {
    icon: Workflow,
    title: "QA en CI/CD",
    desc: "Integración de suites en Jenkins, GitHub Actions y Azure DevOps con shift-left testing y reportes Allure.",
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
              Lo que hago.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Aseguramiento de calidad de extremo a extremo: desde el diseño de casos de prueba hasta
            la automatización integrada en tu pipeline.
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
