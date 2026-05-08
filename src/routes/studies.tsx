import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/studies")({
  head: () => ({
    meta: [{ title: "Estudios — vic.dev" }],
  }),
  component: Studies,
});

function PDFCard({ pdf, onOpen }: { pdf: { title: string; file: string; thumb?: string }; onOpen: (p: any) => void }) {
  return (
    <article className="rounded-2xl overflow-hidden border border-border bg-card">
      <button
        onClick={() => onOpen(pdf)}
        className="group block w-full text-left"
        aria-label={`Abrir ${pdf.title}`}
      >
        <div className="relative h-44 w-full bg-muted/10">
          {pdf.thumb ? (
            // use provided thumb
            <img src={pdf.thumb} alt={pdf.title} className="object-cover h-full w-full" />
          ) : (
            // placeholder while thumbnail is generated client-side
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">PDF</div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-background/70 p-3 shadow transition-transform group-hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current text-foreground"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">{pdf.title}</h3>
          <div className="mt-2 text-sm text-muted-foreground">{pdf.file}</div>
        </div>
      </button>
    </article>
  );
}

export function Studies() {
  const [pdfs, setPdfs] = useState<{ title: string; file: string; thumb?: string }[]>([]);
  const [openPdf, setOpenPdf] = useState<{ title: string; file: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to load an index manifest at /studies/index.json
    let mounted = true;
    async function loadIndex() {
      try {
        const res = await fetch('/studies/index.json');
        if (!res.ok) throw new Error('no manifest');
        const list = await res.json();
        if (mounted && Array.isArray(list)) setPdfs(list);
      } catch (err) {
        // No manifest: leave empty and show instructions
        if (mounted) setPdfs([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadIndex();
    return () => { mounted = false; };
  }, []);

  // Generate thumbnail client-side using PDF.js for items without thumb
  useEffect(() => {
    let mounted = true;
    async function ensurePdfJs() {
      if (!(window as any).pdfjsLib) {
        // load PDF.js from UNPKG
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.min.js';
          s.onload = () => resolve();
          s.onerror = () => reject(new Error('Failed to load pdfjs'));
          document.head.appendChild(s);
        });
        // set workerSrc
        try {
          (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js';
        } catch (e) {
          // ignore
        }
      }
    }

    async function makeThumb(pdfUrl: string) {
      const pdfjsLib = (window as any).pdfjsLib;
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d')!;
        await page.render({ canvasContext: ctx, viewport }).promise;
        const data = canvas.toDataURL('image/png');
        return data;
      } catch (e) {
        return null;
      }
    }

    async function genThumbs() {
      if (!pdfs.length) return;
      try {
        await ensurePdfJs();
      } catch (e) {
        return;
      }
      const updated = await Promise.all(pdfs.map(async (p) => {
        if (p.thumb) return p;
        const thumb = await makeThumb(p.file);
        return thumb ? { ...p, thumb } : p;
      }));
      if (mounted) setPdfs(updated);
    }

    genThumbs();
    return () => { mounted = false; };
  }, [pdfs.length]);

  return (
    <div>
      <Navbar />
      <main>
        <div className="min-h-screen bg-background text-foreground py-12">
          <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold">Estudios y diplomas</h1>

        </div>

        {loading ? (
          <div className="rounded-2xl border border-border bg-card p-8">Cargando...</div>
        ) : pdfs.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-muted-foreground">Aún no hay documentos. Agrega PDFs en public/studies y opcionalmente crea public/studies/index.json con metadatos.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pdfs.map((p) => (
              <PDFCard key={p.file} pdf={p} onOpen={(pdf) => setOpenPdf(pdf)} />
            ))}
          </div>
        )}
      </div>

      {openPdf && (
        <dialog open className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpenPdf(null)} />
          <div className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden bg-background">
            <div className="flex items-center justify-between border-b border-border p-4">
              <div>
                <h3 className="font-medium">{openPdf.title}</h3>
                <div className="text-sm text-muted-foreground">{openPdf.file}</div>
              </div>
              <div className="flex items-center gap-2">
                <a href={openPdf.file} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground">Abrir en nueva pestaña</a>
                <button onClick={() => setOpenPdf(null)} className="rounded-md p-2">Cerrar</button>
              </div>
            </div>
            <div className="h-[70vh] bg-black flex items-center justify-center">
              {/* Use iframe for full PDF viewing; browsers will show built-in viewers. */}
              <iframe src={openPdf.file} className="h-full w-full" title={openPdf.title} />
            </div>
          </div>
        </dialog>
      )}
      </div>
    </main>
    <Footer />
  </div>
  );
}
