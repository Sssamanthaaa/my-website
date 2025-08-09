import homeImage from '../images/homescreen.png'; // if using `src/images`

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-white"
    >
      <img
        src={homeImage}
        alt="Samantha Flores Homepage"
        className="max-w-full h-auto object-contain pt-4 md:pt-20"
      />
    </section>
  );
}
