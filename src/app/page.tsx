import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Shop from "@/components/home/Shop";
import Technology from "@/components/home/Technology";
import TypesOfHoney from "@/components/home/TypesOfHoney";
import Blog from "@/components/home/Blog";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <Shop />
      <Technology />
      <TypesOfHoney />
      <Blog />
      <Testimonials />
    </main>
  );
}
