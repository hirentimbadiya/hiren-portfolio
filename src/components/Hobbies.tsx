const hobbies = [
  { emoji: "🤖", label: "AI & LLMs" },
  { emoji: "📈", label: "Stock Market" },
  { emoji: "🤝", label: "Volunteering" },
  { emoji: "✈️", label: "Traveling" },
  { emoji: "🎵", label: "Music" },
  { emoji: "🏏", label: "Cricket" },
  { emoji: "🎮", label: "Gaming" },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-accent-blue dark:text-accent-yellow mb-2">$ cat hobbies.txt</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">When I&apos;m Not Deploying</h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {hobbies.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card hover:border-accent-blue dark:hover:border-accent-yellow hover:scale-105 transition-all"
            >
              <span className="text-2xl">{h.emoji}</span>
              <span className="font-medium text-sm">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
