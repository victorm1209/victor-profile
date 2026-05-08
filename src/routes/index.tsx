import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TechMarquee } from "@/components/site/TechMarquee";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
// import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollTop } from "@/components/site/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vic.dev — Artesanos en la era de la IA" },
      {
        name: "description",
        content:
          "Agencia de desarrollo web y mobile. Convertimos tu idea en un producto digital rápido, bien diseñado y construido para crecer.",
      },
      { property: "og:title", content: "vic.dev — Artesanos en la era de la IA" },
      {
        property: "og:description",
        content: "Agencia de desarrollo web y mobile. Productos digitales que generan resultados.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Prevent automatic navigation to #contacto on initial load.
    if (typeof window !== "undefined") {
      if (window.location.hash === "#contacto") {
        // Remove hash without adding history entry and scroll to top
        history.replaceState(null, "", window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
      }
    }
  }, []);

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
        {/* <Testimonials /> */}
        <Faq />
        <Contact />
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
}
