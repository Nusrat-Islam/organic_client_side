"use client";

const products = [
  { title: "Organic Honey 500g", price: 450, image: "https://i.ibb.co.com/HTHj2NNB/2d4297299a93e1a00e7b13d67121bfa4.jpg" },
  { title: "Farm Fresh Eggs", price: 120, image: "https://i.ibb.co.com/7JGD60Cd/How-to-Store-Fresh-Eggs-Real-Food-MOTHER-EARTH-NEWS.jpg" },
  { title: "Organic Spinach", price: 80, image: "https://i.ibb.co.com/9kxK75PR/Spinach-Seeds-Organic-Heirloom-Open-Pollinated-Non-GMO-Grow-Indoors-Outdoors-In-Pots-Grow-Beds-Soil.jpg" },
  { title: "Fresh Carrots", price: 60, image: "https://i.ibb.co.com/mY42J0w/download-14.jpg" },
  { title: "Organic Almonds", price: 700, image: "https://i.ibb.co.com/G6W4Px9/Mandeln-Gesunde-Superstars-im-Alltag.jpg" },
  { title: "Dried Apricots", price: 350, image: "https://i.ibb.co.com/4n3PSV9P/Dried-Apricots-Natural-Apricots-Vegan-Snack-No-Added-Sugar-Natural-Armenian-Dry-Fruits.jpg" },
  { title: "Fresh Milk", price: 90, image: "https://i.ibb.co.com/BKYQ2yTW/download-15.jpg" },
  { title: "Organic Turmeric", price: 200, image: "https://i.ibb.co.com/0R4x6sTk/Turmeric.jpg" },
];

export default function BestSellingProducts() {
  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="primary-font text-3xl md:text-4xl font-bold text-green-800 mb-10 text-center">
          Best Selling Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <div
              key={prod.title}
              className="
                relative cursor-pointer rounded-xl overflow-hidden
                bg-white shadow-md hover:shadow-[0_8px_20px_rgba(154,205,50,0.6)]
                transition-shadow duration-300 transform hover:scale-105
              "
            >
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="primary-font text-green-800 font-semibold text-lg mb-2">
                  {prod.title}
                </h3>
                <p className="secondary-font text-gray-600 font-medium">
                  ${prod.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
