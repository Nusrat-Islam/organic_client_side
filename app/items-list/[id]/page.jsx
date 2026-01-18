"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";

export default function ItemDetails({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const id = params.id;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id && id !== "undefined") {
      fetch(`http://localhost:5000/items-list/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen bg-white text-green-600">Loading...</div>;
  if (!item) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col px-6 py-4">
      {/* Top Header - Back to List */}
      <Link href="/items-list" className="text-xs font-bold text-green-700 uppercase tracking-widest hover:opacity-70 mb-2">
        ← Back to Items
      </Link>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-green-700 p-8 rounded-[40px] shadow-sm -mt-20">
          
          {/* Left Side: Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-3xl p-4 h-full">
            <img 
              src={item.image} 
              alt={item.name} 
              className="max-h-[350px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Side: Essential Info */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mb-1 block">
                {item.category} • {item.origin}
              </span>
              <h1 className="text-3xl font-bold text-black mb-2 leading-tight">
                {item.name}
              </h1>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xl font-black text-black">${item.price}</span>
                <span className="text-sm text-gray-700 font-medium">{item.unit}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6 border-l-2 border-green-100 pl-4">
                {item.full_description}
              </p>
            </div>

            {/* Nutrition Grid - Compact & Clean */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h3 className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-3">Nutrition Facts</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded-xl text-center shadow-sm">
                  <p className="text-[9px] text-gray-700 uppercase">Calories</p>
                  <p className="text-sm font-bold text-gray-700">{item.nutrition?.calories}</p>
                </div>
                <div className="bg-white p-2 rounded-xl text-center shadow-sm">
                  <p className="text-[9px] text-gray-700 uppercase">Fiber</p>
                  <p className="text-sm font-bold text-gray-800">{item.nutrition?.fiber}</p>
                </div>
                <div className="bg-white p-2 rounded-xl text-center shadow-sm">
                  <p className="text-[9px] text-gray-700 uppercase">Sugar</p>
                  <p className="text-sm font-bold text-gray-700">{item.nutrition?.sugar}</p>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="mt-6 flex justify-between items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 border-t pt-4 border-gray-50">
              <p>Organic Rizq Certified</p>
              <p className="text-green-600">Stock: {item.stock} Units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}