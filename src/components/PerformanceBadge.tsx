export default function PerformanceBadge() {
  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        hidden
        md:block
      "
    >
      <div className="bg-white/95 backdrop-blur-xl border p-5 rounded-2xl shadow-xl">

        <div className="text-xs uppercase tracking-widest text-neutral-500">
          Performance
        </div>

        <div className="mt-3 space-y-1">

          <div className="flex justify-between gap-8">
            <span>SEO</span>
            <span>100</span>
          </div>

          <div className="flex justify-between gap-8">
            <span>Speed</span>
            <span>&lt;1s</span>
          </div>

          <div className="flex justify-between gap-8">
            <span>SSR</span>
            <span>Enabled</span>
          </div>

        </div>

      </div>
    </div>
  );
}