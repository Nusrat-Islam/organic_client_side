"use client";

const steps = [
  { id: "01", title: "Smart Farming", desc: "We grow products using 100% natural fertilizers." },
  { id: "02", title: "Careful Harvest", desc: "Every item is hand-picked at the peak of freshness." },
  { id: "03", title: "Eco-Packaging", desc: "Packed in plastic-free, biodegradable materials." },
];

export default function FarmProcess() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Farm to Your Table</h2>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step) => (
            <div key={step.id} className="relative p-8 bg-white border border-gray-50 rounded-3xl hover:shadow-xl transition-all duration-500 group">
              <span className="text-6xl font-black text-green-700 absolute top-4 right-4 group-hover:text-green-100 transition-colors">
                {step.id}
              </span>
              <h3 className="text-xl font-bold text-black mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}