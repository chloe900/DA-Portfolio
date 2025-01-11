export default function Home() {
    return (
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-xl text-gray-700 mb-8">
            I build modern, responsive websites and applications.
          </p>
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            View My Work
          </a>
        </div>
      </main>
    );
  }
  