import { SectionLabel } from "./SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuál es el proceso de desarrollo?",
    a: "Trabajamos en cuatro fases: descubrimiento, diseño, desarrollo y lanzamiento, con check-ins constantes.",
  },
  {
    q: "¿Cuánto tiempo toma un proyecto?",
    a: "Depende del alcance. Un MVP toma 4-8 semanas; productos completos entre 2 y 4 meses.",
  },
  {
    q: "¿Qué tecnologías utilizan?",
    a: "Node.js, Newman, Jmeter, Jira, Cypress, MongoDB y PostgreSQL como stack principal.",
  },
  {
    q: "¿Ofrecen mantenimiento post-lanzamiento?",
    a: "Sí. Ofrecemos planes de soporte mensuales con monitoreo y mejoras continuas.",
  },
  {
    q: "¿Trabajan con startups y empresas?",
    a: "Sí, nos adaptamos a cualquier tipo de cliente.",
  },
  {
    q: "¿Cómo puedo comenzar un proyecto?",
    a: "Escríbenos por el formulario. Te atenderemos en menos de 24 horas para discutir tu proyecto.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
            Preguntas frecuentes.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Respuestas a las dudas más comunes sobre cómo trabajamos.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="font-display text-left text-lg font-medium hover:text-accent hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
