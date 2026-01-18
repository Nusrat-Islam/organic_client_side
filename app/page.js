import BestSellingProducts from "@/components/BestsellingProducts";
import FarmProcess from "@/components/FarmProcess";
import FeaturedCategories from "@/components/FeaturedCategories";
import HeroBanner from "@/components/HeroBanner";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

// 5enEiKNlyYCSjFIK
export default function Home() {
  return (
    <>
     <HeroBanner></HeroBanner>
     <FeaturedCategories></FeaturedCategories>
     <BestSellingProducts></BestSellingProducts>
     <WhyChooseUs></WhyChooseUs>
     <Testimonials></Testimonials>
     <Newsletter></Newsletter>
     <FarmProcess></FarmProcess>
    </>
  );
}
