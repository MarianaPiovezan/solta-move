import { BtnWatsapp } from "./components/BtnWhatsapp"
import { Menu } from "./components/Menu"
import { Footer } from "./components/Footer"
import { Activities } from "./components/LandingPage/Activities"
import { Advantages } from "./components/LandingPage/Advantages"
import { ClassShowcase } from "./components/LandingPage/ClassShowcase"
import { Goals } from "./components/LandingPage/Goals"
import { Hero } from "./components/LandingPage/Index"
import { Testimonials } from "./components/LandingPage/Testimonials"
import { Staff } from "./components/LandingPage/Staff"
import { Sale } from "./components/LandingPage/Sale"
import {Faq} from "./components/LandingPage/Faq"
import { Welcome } from "./components/LandingPage/Welcome"
import { ScrollToHash } from "./components/ScrollTpHash"

function App() {

  return (
    <>
     <ScrollToHash/>
   <Menu/>
   <BtnWatsapp/>
   <Hero/>
   <Welcome/>
   <Testimonials/>
   <Goals/>
   {/* <Activities/> */}
   {/* <ClassShowcase/> */}
   {/* <Advantages/> */}
   {/* <Staff/> */}
   <Sale/>
   <Faq/>
   <Footer/>

   </>
  )
}

export default App
