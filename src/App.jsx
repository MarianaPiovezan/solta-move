import { BtnWatsapp } from "./components/BtnWhatsapp"
import { Footer } from "./components/Footer"
import { Header } from "./components/header"
import { Hero } from "./components/LandingPage/Index"
import { Testimonials } from "./components/LandingPage/Testimonials"
import { Welcome } from "./components/LandingPage/Welcome"

function App() {

  return (
    <>
   <Header/>
   <BtnWatsapp/>
   <Hero/>
   <Welcome/>
   <Testimonials/>
   <Footer/>

   </>
  )
}

export default App
