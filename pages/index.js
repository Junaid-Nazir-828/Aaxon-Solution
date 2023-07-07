import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import { CirclularComponent } from "@/components/CirclularComponent"

export default function Home() {
  return (
    <Layout>
        <Hero />
        <CirclularComponent text="Web Development" margin="ml-20 mt-20"/>
        <CirclularComponent text="Data Analytics" margin="ml-80"/>
        <CirclularComponent text="System Applications and Products" margin="ml-20"/>        
    </Layout>   
  )
}
