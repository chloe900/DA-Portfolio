export default function Section1() {
    return (
      <section className="relative bg-[url('/images/generic.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-white border-solid border-b-2">
        <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
        <h1 className="relative z-10 text-8xl font-serif mb-8">Explore My Work</h1>
        <button className="relative z-10 bg-[#020617] bg-opacity-0 border-solid border-2 hover:bg-gray-50 hover:text-slate-500 text-white font-bold py-3 px-12 rounded-full"><a href ="#projects">
          See More</a></button>
      </section>
    );
  }