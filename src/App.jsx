import { useState } from 'react';
import hero from './content/hero.json';
import skills from './content/skills.json';
import projects from './content/projects.json';
import contact from './content/contact.json';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b relative">
        <img src="/letter-z.png" alt="Zico logo" className="h-8 w-auto" />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#about" className="hover:text-green-700">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-green-700">
              Work
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="absolute top-full left-0 right-0 bg-white border-b shadow-md flex flex-col md:hidden z-10">
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-3 hover:bg-gray-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-3 hover:bg-gray-100"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block px-8 py-3 hover:bg-gray-100"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero / About */}
      <section id="about" className="bg-green-700 text-white px-8 py-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
<img src="/me.png" alt="Zico" className="w-40 h-40 rounded shrink-0 object-cover" />
          <div>
            <h1 className="text-3xl font-bold mb-2">{hero.name}</h1>
            <p className="text-lg mb-4">{hero.tagline}</p>
            <p className="font-bold">Bio:</p>
            <p>{hero.bio}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded flex items-center justify-center font-bold">
                  {s.name.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="font-bold">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Latest projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
  <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="block">
    {p.image ? (
      <img src={p.image} alt={p.title} className="aspect-square w-full object-cover mb-3 rounded" />
    ) : (
      <div className={`${p.color} aspect-square mb-3 rounded`}></div>
    )}
    <h3 className="font-bold">{p.title}</h3>
    <p className="text-sm text-gray-600">{p.client}</p>
  </a>
))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">{contact.heading}</h2>
            <p className="text-gray-600 mb-4">{contact.subtext}</p>
            <p className="text-gray-600">{contact.email}</p>
          </div>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-gray-100 px-4 py-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 px-4 py-3 rounded"
            />
            <textarea
              placeholder="Type your message here"
              rows="5"
              className="w-full bg-gray-100 px-4 py-3 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t text-center text-sm text-gray-500">
        © 2026 Zico Portfolio
      </footer>
    </div>
  );
}

export default App;
