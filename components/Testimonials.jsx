"use client";

const testimonials = [
  {
    name: "Ayesha Rahman",
    comment: "Organic Rizq delivers the freshest products. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Imran Hossain",
    comment: "Love their chemical-free vegetables. My family enjoys every meal!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Nabila Khan",
    comment: "Fast delivery and excellent customer service. Truly reliable!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="primary-font text-3xl md:text-4xl font-bold text-green-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.name}
              className="
                p-6 bg-white rounded-xl shadow-md hover:shadow-[0_8px_20px_rgba(154,205,50,0.6)]
                transition-shadow duration-300 flex flex-col items-center
              "
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="secondary-font text-gray-700 mb-4">"{testi.comment}"</p>
              <h3 className="primary-font text-green-800 font-semibold">{testi.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
