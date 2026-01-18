"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie"; // কুকি ব্যবহারের জন্য
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // ১. Hardcoded Credentials (Mock Login)
    const mockEmail = "admin@organic.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      // ২. Store credentials in cookies (expires in 1 day)
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      Cookies.set("userEmail", email, { expires: 1 });

      toast.success("Login Successful!");
      
      // Redirect to items page on success
      router.push("/items-list"); 
    } else {
      setError("Invalid email or password! Try admin@organic.com / password123");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-50 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
        
        <div className="bg-gradient-to-r from-green-700 to-[#9ACD32] py-10 text-center">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-green-50 text-sm mt-2">Login to Organic Rizq</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 mt-6 space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full text-black rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-green-700 to-[#9ACD32] hover:scale-[1.02] transition-all mt-4"
          >
            Login Now
          </button>
        </form>
      </div>
    </section>
  );
}