import FAQ from "./components/faq";
import Participants from "./components/participants";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50 text-gray-800">
      <div>
        <Navbar />
        <Hero />
      </div>
      <main className="flex-grow ">
        <section className=" mx-auto ">
          <Participants />
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}