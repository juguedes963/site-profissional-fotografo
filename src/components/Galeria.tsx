import React from "react";
interface IGalery {
    fotos: string
    widht?: number,
    height?: number
}
export default function Galeria({
    fotos,
    widht,
    height
}: IGalery) {
    return <img src={fotos} className="border-2 border-white hover:scale-105 object-fill w-full  rounded-sm"  />
}