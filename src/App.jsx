import Gallery from "./components/Gallery";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <section className="px-6 flex justify-center items-center py-20 bg-red-50 [@media(max-width:1040px)]:py-10">
        <div className="max-w-[1170px] w-full mx-auto">
          <Gallery />
        </div>
      </section>
    </main>
  </>
);

export default App;
