"use client";

export default function Newsletter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 bg-green-50 rounded-[40px] p-10 md:p-16 text-center border border-green-100">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Healthy with Organic Tips
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Subscribe to our newsletter to receive updates on new arrivals, special offers, and healthy lifestyle tips.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 text-black px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          />
          <button className="bg-gradient-to-r from-green-700 to-[#9ACD32] hover:bg-none hover:bg-black text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-green-100">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-4 italic">No spam, we promise only fresh news!</p>
      </div>
    </section>
  );
}