import Image from "next/image"

type CatalogItemProps = {
    image : string,
    title : string,
    price : string
}

const CatalogItem : React.FC<CatalogItemProps> = ({image, title, price}) => {
    return <div className="min-w-[250px] md:min-w-[200px] space-y-3">
    <div className="w-full h-64 relative">
        <Image src={image} alt="logo-deles" fill objectFit="cover" className="rounded-lg" />
    </div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-white-800">Rp. {price}</p>
  </div>
} 

export default CatalogItem;