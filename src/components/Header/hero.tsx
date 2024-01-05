import Image from "next/image"

const Hero : React.FC = () => {
    return (
    <div className="container py-10 md:py-20 flex flex-col md:flex-row items-center md:space-x-10">
        <div className="w-full sm:w-3/6 md:w-3/6 h-96 relative mb-5 md:mb-0">
            <Image src={"/images/hero.png"} alt="logo-deles" fill objectFit="cover" className="rounded-tl-3xl" />
        </div>
        <div className="w-full text-white-950 space-y-3">
            <h1 className="md:text-lg text-white-500 tracking-wider">DELES</h1>
            <p className="font-bold text-2xl md:text-5xl md:leading-tight">Minuman <span className="underline underline-offset-8">Asli Karya</span> Putra Putri Banyuwangi</p>
            <p className="text-base leading-relaxed text-white-500">DELES merupakan minuman spesial teh tarik dengan teknik penyajian menggunakan bambu yang menjadikan rasa minuman lebih nendang dan angklek.</p>
        </div>
    </div>);
}

export default Hero;