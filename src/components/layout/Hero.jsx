import { heroSection } from "../../stubs";

const Hero = () => (
  <section className="D text-white bg-slate-800 px-6">
    <div className="flex flex-col space-y-10 justify-center items-center h-72 text-center">
      <h1 className="text-7xl">{heroSection.title}</h1>
      <p className="text-slate-400 max-w-[570px]">{heroSection.text}</p>
    </div>
  </section>
);

export default Hero;
