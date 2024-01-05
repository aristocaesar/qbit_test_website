import testimonies from "@/data/testimonies";
import Section from "../Section"
import TestimoniItem from "./item";

const Testimoni : React.FC = () => {
    return <Section id="testimoni">
    <h2 className="font-bold text-center text-3xl mb-5">Apa Kata <span className="underline underline-offset-8">Mereka</span> ?</h2>
    <p className="text-base text-center leading-relaxed text-white-500 mb-10">Dengan dedikasi yang tinggi, DELES selalu ingin memberikan yang terbaik untuk Pelanggan.</p>
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
      {
        testimonies.map((testimoni, index) => {
            return <TestimoniItem key={index} image={testimoni.image} name={testimoni.name} description={testimoni.description} />
        })
      }
    </div>
  </Section>
}

export default Testimoni;