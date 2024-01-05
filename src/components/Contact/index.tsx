import Link from "next/link";
import Section from "../Section";
import { Facebook, Instagram, Phone } from "react-feather";

const Contact : React.FC = () => {
    return <Section id="kontak">
    <h2 className="font-bold text-3xl border-l-2 pl-3 border-white-950 mb-5">Kontak</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0">
      <div className="text-white-800 space-y-5">
        <p className="leading-relaxed">Kami DELES sangat terbuka untuk kerja sama pada berbagai event atau open tenant, kalian juga bisa melakukan pengajuan untuk sponsorship.</p>
        <p className="leading-relaxed">Apabila ada kritik dan saran ataupun pertanyaan lain seputar deles, Silakan hubungi pada kontak berikut.</p>
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href={"https://www.facebook.com/deleskaryasejati/"}target="_blank" className="flex space-x-3 items-center"><Facebook size="28" /> <span>Deles Karya Sejati</span></Link>
          </li>
          <li>
            <Link href={"https://www.instagram.com/deles.id/"}target="_blank" className="flex space-x-3 items-center"><Instagram size="28" /> <span>@deles.id</span></Link>
          </li>
          <li>
            <Link href={"https://wa.me/6283114904341"}target="_blank" className="flex space-x-3 items-center"><Phone size="28" /> <span>0831-1490-4341</span></Link>
          </li>
        </ul>
      </div>
      <div className="text-white-800 space-y-3 flex justify-end">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.400261938253!2d114.16906811041488!3d-8.362227617921004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd155a8fc9ab5cf%3A0x1a8d1ce39fba4985!2sKantor%20Deles!5e0!3m2!1sid!2sid!4v1704437739491!5m2!1sid!2sid" className="w-full md:w-[450px]" height="350" loading="lazy"></iframe>
        </div>
    </div>
  </Section>
}

export default Contact;