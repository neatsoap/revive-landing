import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#1a1817] text-white min-h-screen font-sans">
      <Head>
        <title>Revive — Coming Soon</title>
        <meta name="description" content="Zurich's first social wellness club is coming." />
      </Head>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen text-center px-4">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest">Revive</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400">
            Zurich’s first social wellness club — where recovery becomes ritual.
          </p>
        </div>
      </section>

      {/* Moodboard Section */}
      <section className="py-16 px-6 bg-[#1f1d1b]">
        <h2 className="text-2xl font-semibold text-center mb-8">Mood & Atmosphere</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/mood1.jpg" className="rounded-xl shadow-lg" alt="Mood 1" />
          <img src="/mood2.jpg" className="rounded-xl shadow-lg" alt="Mood 2" />
          <img src="/mood3.jpg" className="rounded-xl shadow-lg" alt="Mood 3" />
        </div>
      </section>

      {/* Mission Snippet */}
      <section className="py-20 px-6 text-center">
        <p className="text-xl md:text-2xl italic text-gray-300 max-w-3xl mx-auto">
          “A space to disconnect — and reconnect. Where recovery becomes ritual. And wellness becomes social.”
        </p>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="bg-[#1f1d1b] py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Be the First to Know</h2>
        <p className="text-gray-300 mb-6">Join the Founders List for early access and exclusive benefits.</p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md text-black"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
          >
            Join Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Revive Collective. All rights reserved.
      </footer>
    </div>
  );
}
