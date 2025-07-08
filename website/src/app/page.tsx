import FAQ from "./components/faq";
import Participants from "./components/participants";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HowItWorks from "./components/HowItWorks";
import TopCollections from "./components/TopCollections";
export default function Home() {
  return (
    <div className="flex flex-col bg-[#080a1f] text-gray-800">
      <div>
        <Navbar />
        <Hero />
        <HowItWorks />
        <TopCollections />
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
