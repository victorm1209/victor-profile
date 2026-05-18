export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="font-mono text-sm">
          <span className="text-foreground">Victor De Ascencao - </span>
          <span className="text-accent">QA</span>
          <span className="ml-3 text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://www.linkedin.com/in/victor-de-ascencao-220984255" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="https://github.com/victorm1209" className="hover:text-foreground">
            GitHub
          </a>
          <a href="https://x.com/victorm1209?s=11" className="hover:text-foreground">
            Twitter / X
          </a>
          <a href="https://www.instagram.com/victorm1209" className="hover:text-foreground">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
