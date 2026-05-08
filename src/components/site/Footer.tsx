export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="font-mono text-sm">
          <span className="text-foreground">sabo</span>
          <span className="text-accent">.dev</span>
          <span className="ml-3 text-muted-foreground">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-foreground">GitHub</a>
          <a href="#" className="hover:text-foreground">Twitter / X</a>
          <a href="#" className="hover:text-foreground">Instagram</a>
        </div>
      </div>
    </footer>
  );
}