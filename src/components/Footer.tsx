export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex flex-col leading-tight text-center">
            <span className="text-2xl font-bold tracking-tighter">CONCRETE</span>
            <span className="text-sm font-light tracking-wider text-zinc-400">
              RUNNERS
            </span>
          </div>

          {/* Text */}
          <div className="text-center space-y-1">
            <p className="text-sm text-zinc-400">
              © 2024 Concrete Runners. Industrial Running Crew.
            </p>
            <p className="text-sm text-zinc-500">
              도시를 달리는 브루탈리즘 러닝 크루
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
