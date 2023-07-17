import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
// import Layout from "@/components/Layout"
import Nav from "@/components/Navbar"
// import { CirclularComponent } from "@/components/CirclularComponent"
import Techs from "@/components/Techs"
import Testimonial from "@/components/Testimonial"
import Work from "@/components/Work"

// <CirclularComponent text="Web Development" margin="ml-20 mt-20"/>
// <CirclularComponent text="Data Analytics" margin="ml-[520px]"/>
// <CirclularComponent text="System Applications and Products" margin="ml-20"/>

export default function Home() {
  return (
    <div>
    <Nav />
    <Hero />
    <Work />               
    <Techs />
    <Testimonial />
    <Contact/>
    <Footer />
    </div>  
  )
}
