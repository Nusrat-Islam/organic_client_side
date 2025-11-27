"use client";

const categories = [
  { title: "Vegetables", image:"https://i.ibb.co.com/WW0fLMKk/Apples-are-placed-on-a-white-background-Premium-AI-generated-image.jpg" },
  { title: "Fruits", image:  "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"},
  { title: "Spices", image: "https://i.ibb.co.com/tMVSzBm6/herbs-spices.jpg" },
  { title: "Dairy", image: "https://i.ibb.co.com/LhXt6Qq1/Assorted-Dairy-Products-with-Cheese-Milk-Yogurt-and-Butter-in-Rustic-Farm-to-Table-Setting.jpg" },
  { title: "Oils & Honey", image: "https://i.ibb.co.com/PzFdf2p1/Honey-And-Oatmeal-Cleanser.jpg" },
  { title: "Dry Food", image: "https://i.ibb.co.com/HLRK2Y5x/Discover-and-download-free-images-Assorted-Dried-Fruits-Collection-in-Wooden-Bowls-Top-View-https-ai.jpg" },
  { title: "Nuts & Seeds", image: "https://i.ibb.co.com/GQcSkx4n/Nutty-delight-topview-organic-nuts-snack-Premium-AI-generated-image.jpg" },
  { title: "Beverages", image: "https://i.ibb.co.com/PZg1M2MB/Gut-Cleansing-Drinks-for-Better-Health.jpg" },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="primary-font text-3xl md:text-4xl font-bold text-green-800 mb-10 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="
                relative cursor-pointer rounded-xl overflow-hidden
                bg-white shadow-md hover:shadow-lg transition-shadow duration-300
                hover:scale-105 transform
              "
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="primary-font text-blue-300 text-xl font-semibold">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}