"use client";

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-10">

        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="primary-font text-4xl md:text-5xl font-bold leading-tight 
            bg-gradient-to-r from-green-700 to-[#9ACD32] bg-clip-text text-transparent">
            Fresh & Organic Groceries  
          </h1>

          <p className="primary-font text-3xl md:text-4xl font-bold text-green-800">
            100% Natural. Chemical-Free. Healthy Living 🌿
          </p>

          <p className="secondery-font text-gray-700 text-lg">
            Welcome to <span className="font-semibold text-green-700">Organic Rizq</span> —  
            where purity meets quality. Order daily fresh items at the best price.
          </p>

          <button className="
               px-8 py-3 
    font-semibold 
    text-white 
    primary-font 
    rounded-xl 
    shadow-md 
    transition-all 
    duration-300
    bg-gradient-to-r from-green-700 to-[#9ACD32]
    hover:bg-none
    hover:bg-black
    hover:scale-105">
            Shop Now
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
            alt="Organic food"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}