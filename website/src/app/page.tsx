import FAQ from "./components/faq";
import Participants from "./components/participants";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <main className="flex-grow ">
        <section className=" mx-auto ">
          <Participants />
          <FAQ />
        </section>
      </main>

      {/* <footer className="bg-gray-900 text-white">
      </footer> */}
      <Footer />
    </div>
  );
}
