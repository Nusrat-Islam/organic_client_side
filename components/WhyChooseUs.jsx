"use client";

const features = [
  {
    title: "100% Organic",
    description: "All products are 100% certified organic from trusted farms.",
    icon: "🌱",
  },
  {
    title: "Farm Fresh",
    description: "Freshly harvested and delivered directly from farms.",
    icon: "🥬",
  },
  {
    title: "Chemical Free",
    description: "No pesticides or harmful chemicals used in our products.",
    icon: "🚫",
  },
  {
    title: "Fast Delivery",
    description: "Quick and safe delivery to your doorstep.",
    icon: "🚚",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="primary-font text-3xl md:text-4xl font-bold text-green-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                p-6 rounded-xl bg-green-50 hover:shadow-[0_8px_20px_rgba(154,205,50,0.6)]
                transition-shadow duration-300 cursor-pointer
              "
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="primary-font text-green-800 text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="secondary-font text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}