export default function WhyItConverts() {
  const items = [
    {
      title: "SEO Optimized",
      description:
        "Built for search engines from day one with technical SEO best practices.",
    },
    {
      title: "Performance First",
      description:
        "Optimized assets, server rendering and fast loading experiences.",
    },
    {
      title: "Conversion Focused",
      description:
        "Designed to guide visitors toward purchases with minimal friction.",
    },
    {
      title: "Scalable",
      description:
        "Ready for future growth, integrations and advanced features.",
    },
  ];

  return (
    <section className="py-40 border-t">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">

          <p className="uppercase tracking-[0.4em] text-xs text-neutral-500">
            Performance
          </p>

          <h2 className="text-5xl mt-6">
            Why this store sells more
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {items.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl mb-4">
                {item.title}
              </h3>

              <p className="text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}