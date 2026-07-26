import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Contact />
      
      <footer className="bg-[#0a0a0f] border-t border-white/10 py-6 text-center">
        <p className="text-white/30 text-sm">
          Built by Rohit Raj with React + Tailwind + Framer Motion · 2025
        </p>
      </footer>
    </main>
  )
}

export default Home
