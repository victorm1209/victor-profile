import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the button mounted so we can animate its entry/exit.
  return (
    <button
      className={`scroll-top ${visible ? "scroll-top--visible" : "scroll-top--hidden"}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-hidden={!visible}
    >
      <ArrowUp className="h-5 w-5 text-foreground" />
    </button>
  );
}
