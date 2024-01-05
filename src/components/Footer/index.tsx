import Image from "next/image";
import Link from "next/link";

const Footer : React.FC = () => {
    return <footer className="container text-white-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-16 border-b border-t border-white-100 py-16">
            <div className="flex flex-col space-y-8">
                <div className="w-28 h-20 md:w-32 md:h-24 relative">
                    <Image src={"/images/logo-deles-circle.png"} alt="logo-deles" fill />
                </div>
                <p className="text-base md:text-sm md:max-w-[250px] text-white-950 leading-relaxed">Deles merupakan minuman spesial teh tarik asli karya putra putri banyuwangi</p>
            </div>
            <div className="flex flex-col md:items-center space-y-5">
                <h2 className="font-bold text-lg underline underline-offset-8 text-white-950">Katalog</h2>
                <ul className="space-y-1">
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Es Tea</Link></li>
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Hot Coffie</Link></li>
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Best Seller</Link></li>
                </ul>
            </div>
            <div className="flex flex-col md:items-center space-y-5">
                <h2 className="font-bold text-lg underline underline-offset-8 text-white-950">Informasi</h2>
                <ul className="space-y-1">
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Promo</Link></li>
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Karir</Link></li>
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Tentang</Link></li>
                    <li><Link href={"/"} className="hover:text-white-500 hover:underline hover:underline-offset-8">Kontak</Link></li>
                </ul>
            </div>
        </div>
        <p className="py-10 text-sm md:text-center">Copyright &copy; 2024 PT. DELES KARYA SEJATI by Aristo Caesar Pratama. All Rights Reserved.</p>
    </footer>
}

export default Footer;