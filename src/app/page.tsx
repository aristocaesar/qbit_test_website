import About from "@/components/About"
import Catalog from "@/components/Catalog"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Testimoni from "@/components/Testimoni"

export default function Home() {
  return(
    <>
      <Header/>
      <Catalog />
      <Testimoni />
      <About />
      <Contact />
      <Footer/>
    </>
  )
}
