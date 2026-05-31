export function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-dark-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="font-mono text-xs text-light-muted dark:text-dark-muted">
          © {new Date().getFullYear()} Hiren Timbadiya. Built with Next.js + Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-light-muted dark:text-dark-muted">
          Designed & developed with ☕ and determination.
        </p>
      </div>
    </footer>
  );
}
