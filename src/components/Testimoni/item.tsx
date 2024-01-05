import Image from "next/image";

type TestimoniItemProps = {
    image : string,
    name : string,
    description : string
}

const TestimoniItem : React.FC<TestimoniItemProps> = ({image, name, description}) => {
    return <div className="w-full lg:w-4/12 flex space-x-5">
    <div className="min-w-[60px] md:min-w-[65px] h-16 md:h-16 relative">
        <Image src={image} alt="logo-deles" fill objectFit="cover" className="rounded-full" />
    </div>
    <div className="w-full flex flex-col">
      <p className="mb-2">{name}</p>
      <p className="text-sm leading-relaxed text-white-500">{description}</p>
    </div>
  </div>
}

export default TestimoniItem;