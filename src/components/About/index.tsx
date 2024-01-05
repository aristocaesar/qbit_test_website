import Image from "next/image";
import Section from "../Section";

const About : React.FC = () => {
    return <Section id="tentang" className="flex flex-col md:flex-row md:space-x-10 items-center">
    <div className="w-full sm:w-3/6 md:w-3/6 h-96 relative mb-5 md:mb-0">
        <Image src={"/images/deles-about.jpg"} alt="logo-deles" fill objectFit="cover" className="rounded-lg" />
    </div>
    <div className="w-full text-white-950 space-y-3">
        <h2 className="font-bold text-3xl border-l-2 pl-3 border-white-950 mb-5">Tentang Kami</h2>
        <p className="text-base leading-relaxed text-white-500">Kami merupakan salah satu UMKM di Banyuwangi yang mempunyai produk unggulan bernama DELES, yang artinya asli. DELES adalah minuman teh tarik spesial dengan penyajian unik menggunakan bambu, memberikan sentuhan rasa yang lebih intens dan autentik. DELES juga merupakan hasil kreativitas anak-anak Banyuwangi yang memiliki outlet tersebar di berbagai kecamatan di daerah banyuwangi, terus berkembang dari tahun ke tahun.</p>
    </div>
  </Section>
}

export default About;