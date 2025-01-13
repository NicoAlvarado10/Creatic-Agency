import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Footer } from "./sections/Footer"
import { Home } from "./sections/Home"
import { Metrics } from "./sections/Metrics"
import { Portfolio } from "./sections/Portfolio"
import { Services } from "./sections/Services"
import { Testimonials } from "./sections/Testimonials"


function App() {

  return (
    <>
    <Home/>
    <main>
    <About/>
    <Services/>
    <Metrics/>
    <Portfolio/>
    <Experience/>
    <Testimonials/>
    </main>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
