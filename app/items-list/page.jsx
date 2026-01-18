"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('organic-rizq-server.vercel.app/items-list') 
      .then((res) => res.json())
      .then((data) => {
        console.log("Data loaded:", data); 
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center primary-font">
          Our Fresh Collections 🌿
        </h1>

        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-green-50"
            >
              {/* Item Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image || "https://via.placeholder.com/300"} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Item Content */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-black mb-2 truncate">
                  {item.name}
                </h2>
               <div className="">
                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.short_description}
                </p>
                <h4 className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.category}
                </h4>
               </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">
                    ${item.price}
                  </span>
                  
                  {/* Details Page Link */}
                  <Link href={`/items-list/${item._id}`}>
                    <button className="px-4 py-2 bg-gradient-to-r from-green-700 to-[#9ACD32] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}