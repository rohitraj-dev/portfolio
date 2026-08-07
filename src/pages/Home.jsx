import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <Hero />
        <Contact />
      </div>
      <div className="h-16" />
      <Footer />
    </main>
  )
}

export default Home
