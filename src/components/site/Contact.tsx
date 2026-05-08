import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section id="contacto" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Contacto</SectionLabel>
              <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.95] md:text-6xl">
                Trabajemos <span className="italic text-accent">juntos</span>.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                ¿Tienes un proyecto en mente? Estamos disponibles para nuevas oportunidades y
                colaboraciones. Respondemos en menos de 24 horas.
              </p>

              <div className="mt-10 space-y-5">
                <a href="mailto:vmdadj@gmail.com" className="flex items-start gap-4 group">
                  <div className="rounded-xl border border-border bg-background/40 p-2.5 text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Email
                    </div>
                    <div className="mt-1 group-hover:text-accent">vmdadj@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/584242440910" className="flex items-start gap-4 group">
                  <div className="rounded-xl border border-border bg-background/40 p-2.5 text-accent">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Teléfono
                    </div>
                    <div className="mt-1 group-hover:text-accent">+58 424 244 0910</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-border bg-background/40 p-2.5 text-accent">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Ubicación
                    </div>
                    <div className="mt-1">España · Venezuela · Remoto global</div>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const phone = "584242440910";
                const intro = "Hola Victor,";
                const main = "*Estoy interesad@ en contactar contigo...*";
                const detailsHeader = "*Detalles de contacto*";
                const details = `*Nombre:* ${name || "—"}\n*Email:* ${email || "—"}\n*Asunto:* ${subject || "—"}`;
                const body = `${message || "—"}`;

                const text = `${intro}\n\n${main}\n\n${detailsHeader}\n${details}\n\n*Mensaje:*\n${body}`;

                const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
                window.open(url, "_blank");
              }}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background/40 p-8"
            >
              <Field
                label="Nombre"
                name="name"
                id="contact-name"
                autoComplete="name"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Field
                label="Email"
                name="email"
                id="contact-email"
                autoComplete="email"
                placeholder="tucorreo@empresa.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Field
                label="Asunto"
                name="subject"
                id="contact-subject"
                autoComplete="off"
                placeholder="¿De qué hablamos?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  autoComplete="off"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                Enviar mensaje
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  ...props
}: { label: string; id?: string; name?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const inputId =
    id ?? (name ? `contact-${name}` : `contact-${label.toLowerCase().replace(/\s+/g, "-")}`);
  return (
    <div>
      <label
        htmlFor={inputId}
        className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
