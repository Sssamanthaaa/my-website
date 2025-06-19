export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen snap-start bg-cover bg-center px-6 md:px-20 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/depositphotos_89884862-stock-illustration-binary-code-background.jpg')",
      }}
    >
      {/* blur to background */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10 z-0" />
      
      {/* the img with circle cutout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src="Self-img.jpg"
          alt="Samantha Flores"
          className="w-[39rem] h-[39rem] object-cover rounded-full shadow-md"/>

        <div className="relative w-[40rem] mx-auto text-center md:text-left space-y-6">
          {/* weird way to add circle around the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-white/80 z-[-1] shadow-xl"></div>

          {/* text quick introdurction */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, I’m <span className="text-black">Samantha Flores.</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl leading-relaxed text-justify">
              I'm a recent UC Berkeley graduate in Electrical Engineering and Computer Science.
              My education had been a difficult journey but my passion for innovation and creativity
              has kept me hooked in pursuing a career in technology. I am a STEM enthusiast.
              I hope to join a welcoming community and continue to create. <br /> And lastly ... Go Bears!
            </p>
          </div>

          {/* quick buttons to projects and about */}
          <div className="flex justify-center gap-4 pt-2">
            <a href="#about">
              <p className="bg-gray-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition text-center">
                Get to know me more
              </p>
            </a>
            <a href="#projects">
              <p className="bg-gray-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition text-center">
                Look at my work
              </p>
            </a>
          </div>


        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-100 z-20 pointer-events-none"></div>
    </section>
  );
}
