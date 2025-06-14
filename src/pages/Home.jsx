import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center mt-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Welcome to Campus Club Finder 🎓
      </h1>
      <p className="text-lg text-black-200 mb-6 max-w-xl mx-auto">
        Discover, explore, and join student clubs across campus. Find your community and get involved today!
      </p>
      <a
        href="/clubs"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
      >
        Explore Clubs
      </a>
    </section>
  );
}