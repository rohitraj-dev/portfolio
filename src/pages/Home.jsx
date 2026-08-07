import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Contact />
      <div className="h-16" />
      <Footer />
    </main>
  )
}

export default Home
