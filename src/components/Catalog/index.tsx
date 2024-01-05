import React from "react"
import Section from "../Section"
import CatalogItem from "./item"
import products from "@/data/products"

const Catalog : React.FC = () => {
    return <Section id="katalog" className="space-y-5">
    <h2 className="font-bold text-3xl border-l-2 pl-3 border-white-950">Katalog</h2>
    <p className="text-base leading-relaxed text-white-500"> Berbagai Minuman Kami yang Penuh Inovasi dan Keunikan Rasanya.</p>
    <div className="flex overflow-x-auto space-x-5 pb-8">
        {
            products.map((product, index) => {
                return (
                    <CatalogItem key={index} image={product.image} title={product.title} price={product.price} />
                );
            })
        }
    </div>
  </Section>
}

export default Catalog;