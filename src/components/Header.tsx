import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const menuNav = [
    {
        name: "portifolio",
        route: "#portifolio"
    },
    {
        name: "profissional",
        route: "#profissional"
    },
    {
        name: "casual",
        route: "#casual"
    },
    {
        name: "casamento",
        route: "#casamento"
    },
    {
        name: "newborn",
        route: "#newborn"
    }
]
function Header() {
    const [toogle, setToogle] = useState<boolean>(true)
    const navigation = useNavigate()
    return (
        <nav className={`${!toogle ? 'fixed bg-transparent-black ' : 'fixed md:fixed  bg-black'} z-50 md:py-5 w-full`}>
            <div className='flex md:hidden flex-row justify-end  items-end w-screen ' onClick={() => setToogle(!toogle)}>
                <FiAlignJustify className='cursor-pointer' color='white' size={50} />
            </div>
            <ul className={`${toogle ? 'hidden' : ''} md:flex md:flex-row mx-5 md:items-center  md:w-3/4 md:justify-center`}>
                {menuNav.map(key => {
                    return (
                        <li className='uppercase text-white md:mx-5 font-medium pb-3 cursor-pointer ' key={key.name} >
                            <a href={key.route} className='font-pixel'>
                                {key.name}
                            </a>

                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}
export default Header