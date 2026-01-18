"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white py-16 border-t border-green-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & About */}
        <div className="md:col-span-1">
      <Logo></Logo>
          <p className="text-green-100/70 text-sm leading-relaxed">
            We deliver 100% pure, chemical-free organic products directly from the farm to your doorstep. Your health is our top priority.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-5 uppercase tracking-wider text-green-400">Quick Links</h3>
          <ul className="space-y-3 text-sm text-green-100/70 font-medium">
            <li><Link href="/" className="hover:text-white transition-all">Home</Link></li>
            <li><Link href="/items-list" className="hover:text-white transition-all">All Products</Link></li>
            <li><Link href="/about" className="hover:text-white transition-all">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-all">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-bold mb-5 uppercase tracking-wider text-green-400">Support</h3>
          <ul className="space-y-3 text-sm text-green-100/70 font-medium">
            <li className="hover:text-white cursor-pointer transition-all">FAQ</li>
            <li className="hover:text-white cursor-pointer transition-all">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer transition-all">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer transition-all">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div>
          <h3 className="text-lg font-bold mb-5 uppercase tracking-wider text-green-400">Follow Us</h3>
          <div className="flex space-x-5 mb-8">
            <a href="#" className="text-2xl text-green-100/70 hover:text-green-400 transition-all hover:-translate-y-1"><FaFacebook /></a>
            <a href="#" className="text-2xl text-green-100/70 hover:text-green-400 transition-all hover:-translate-y-1"><FaInstagram /></a>
            <a href="#" className="text-2xl text-green-100/70 hover:text-green-400 transition-all hover:-translate-y-1"><FaTwitter /></a>
            <a href="#" className="text-2xl text-green-100/70 hover:text-green-400 transition-all hover:-translate-y-1"><FaLinkedin /></a>
          </div>
          <div className="text-xs text-green-100/50 leading-loose">
            <p>© {new Date().getFullYear()} Organic Rizq.</p>
            <p>All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}