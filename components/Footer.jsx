"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="primary-font text-xl font-bold mb-4">Organic Rizq</h3>
          <p className="secondary-font text-gray-200">
            Delivering fresh, 100% organic products from farm to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="primary-font text-xl font-bold mb-4">Quick Links</h3>
          <ul className="secondary-font space-y-2">
            <li><a href="#" className="hover:text-green-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-green-300 transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-green-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-green-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="primary-font text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-green-300 transition-colors text-2xl">🌐</a>
            <a href="#" className="hover:text-green-300 transition-colors text-2xl">🐦</a>
            <a href="#" className="hover:text-green-300 transition-colors text-2xl">📘</a>
          </div>
          <p className="secondary-font text-gray-200 text-sm">
            © {new Date().getFullYear()} Organic Rizq. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}