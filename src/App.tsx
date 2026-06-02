import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Historia from './components/Historia'
import PublicoAlvo from './components/PublicoAlvo'
import Stats from './components/Stats'
import Judiciary from './components/Judiciary'
import MinisterioPublico from './components/MinisterioPublico'
import FamiliaConflitos from './components/FamiliaConflitos'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Historia />
        <PublicoAlvo />
        <Stats />
        <Judiciary />
        <MinisterioPublico />
        <FamiliaConflitos />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
