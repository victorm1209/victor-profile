import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "sabo.dev — Artesanos en la era de la IA" },
      {
        name: "description",
        content:
          "Agencia de desarrollo web y mobile. Convertimos tu idea en un producto digital rápido, bien diseñado y construido para crecer.",
      },
      { property: "og:title", content: "sabo.dev — Artesanos en la era de la IA" },
      {
        property: "og:description",
        content: "Agencia de desarrollo web y mobile. Productos digitales que generan resultados.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
