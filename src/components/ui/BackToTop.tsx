import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={(e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        (e.currentTarget as HTMLButtonElement).blur();
      }}
      aria-label="Volver arriba"
      aria-hidden={!visible}
      className={`fixed right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border backdrop-blur-md transition-transform transition-opacity duration-300 focus:outline-none focus:ring-0 hover:border-[#0ea5e9] hover:scale-105 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
        backgroundColor: "rgba(255,255,255,0.06)",
      }}
    >
      <ArrowUp className="h-5 w-5 text-foreground" />
    </button>
  );
}
