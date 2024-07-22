import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-dark relative w-full h-full overflow-hidden  md:px-[1.9rem] xl:px-10 desktop:px-12 largesceen:px-36 fourk:px-60">
      <section>
        <Navbar />
      </section>
    </main>
  );
}
