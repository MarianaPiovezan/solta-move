import { BtnWatsapp } from "./components/BtnWhatsapp"
import { Header} from "./components/Header"
import { Footer } from "./components/Footer"
import { Activities } from "./components/LandingPage/Activities"
import { Advantages } from "./components/LandingPage/Advantages"
import { ClassShowcase } from "./components/LandingPage/ClassShowcase"
import { Goals } from "./components/LandingPage/Goals"
import { Hero } from "./components/LandingPage/Index"
import { Testimonials } from "./components/LandingPage/Testimonials"
import { Trainers } from "./components/LandingPage/trainers"
import { Welcome } from "./components/LandingPage/Welcome"

function App() {

  return (
    <>
   <Header/>
   <BtnWatsapp/>
   <Hero/>
   <Welcome/>
   <Testimonials/>
   <Goals/>
   <Activities/>
   <ClassShowcase/>
   <Advantages/>
   <Trainers/>
   <Footer/>

   </>
  )
}

export default App
