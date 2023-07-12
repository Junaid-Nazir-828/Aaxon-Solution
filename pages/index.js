import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
// import { CirclularComponent } from "@/components/CirclularComponent"
import Techs from "@/components/Techs"
import Work from "@/components/Work"

// <CirclularComponent text="Web Development" margin="ml-20 mt-20"/>
// <CirclularComponent text="Data Analytics" margin="ml-[520px]"/>
// <CirclularComponent text="System Applications and Products" margin="ml-20"/>

export default function Home() {
  return (
    <Layout>
        <Hero />
        <Work />               
        <Techs />
        <Contact/>
        <Footer />
    </Layout>   
  )
}
