import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Contact />
      
      <footer className="bg-[#212529] border-t border-[#495057] py-6 text-center">
        <p className="text-[#6c757d] text-sm">
          Built by Rohit Raj with React + Tailwind + Framer Motion · 2025
        </p>
      </footer>
    </main>
  )
}

export default Home
