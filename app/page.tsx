import Category from "@/components/Category";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import PopularNfts from "@/components/PopularNfts";
import UniqueFiles from "@/components/UniqueFiles";

export default function Home() {
  return (
    <main className="bg-dark relative w-full h-full overflow-hidden  lg:px-[1.9rem] xl:px-10 desktop:px-12 largesceen:px-36 fourk:px-60">
      <section className="relative">
        <div className="section-bg w-full h-full"></div>
        <Navbar />
        <Hero />
        <PopularNfts />
      </section>
      <UniqueFiles />
      <Category />
      <Companies />
      <News />
      <GetInTouch />
      <Footer />
    </main>
  );
}
