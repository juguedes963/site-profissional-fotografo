import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { PiInstagramLogoFill } from "react-icons/pi"
import Line from "./Line"

export default function Footer() {
    return (
        <footer className=' h-full bg-#000000ad w-full flex md:flex-row flex-col justify-evenly item-center md:items-start'>

            <div className='mt-5  grid grid-cols-1 md:w-1/3 '>
                <div className='flex flex-row px-5 cursor-pointer items-center justify-center'>
                    <IoLogoWhatsapp color='white' size={40} />
                    <span className='border-2 w-full border-white text-white px-10 py-2 rounded-3xl mx-2 my-2 flex justify-center' onClick={() => {

                        window.open(`https://api.whatsapp.com/send?phone=5511959728555&text=ol%C3%A1%20gostaria%20de%20marcar%20uma%20sess%C3%A3o%20de%20para%20fotos%20!!`)
                    }}>
                        +55 11 95972-8555
                    </span>
                </div>
                <div className='flex flex-row  px-5 items-center cursor-pointer justify-center'>
                    <PiInstagramLogoFill color='white' size={40} />
                    <span className='border-2 w-full border-white text-white px-10 py-2 rounded-3xl mx-2 my-2 flex justify-center'
                        onClick={() => {

                            window.open(`https://www.instagram.com/limaphotography21/`)
                        }}
                    >
                        @limaphotography21
                    </span>
                </div>
                <div className='flex flex-row  px-5 items-center justify-center cursor-pointer'>
                    <MdEmail color="white" size={40} />
                    <span className='border-2 mx-2 w-full border-white text-white px-10 py-2 rounded-3xl my-2 flex justify-center'
                        onClick={() => window.open('mailto:limagabriel260@gmail.com?subject=subject&body=body')}
                    >
                        limagabriel260@gmail.com
                    </span>
                </div>

            </div>
            <div className="md:w-1/3  w-full h-full mt-5 md:mt-0 mb-5">
                {/* <form className="w-10/12"> */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white  text-3xl">
                        Entre em contato
                    </h1>
                    <span className="flex flex-row items-center border-2 py-1.5 px-2.5 rounded-lg mt-5 md:w-4/12  border-white hover:bg-green-600 cursor-pointer"
                        onClick={() => {
                            window.open(`https://api.whatsapp.com/send?phone=5511959728555&text=ol%C3%A1%20gostaria%20de%20marcar%20uma%20sess%C3%A3o%20de%20para%20fotos%20!!`)
                        }}
                    >
                        <h3 className="text-white ml-5 text-xl md:mr-2 mr-5  ">
                            Via Whatsapp
                        </h3>
                        <IoLogoWhatsapp color='white' size={30} />
                    </span>
                </div>

                {/* <input className="bg-white w-full px-4 py-2.5 text-black placeholder:text-gray-500 my-2.5 mx-4 rounded-lg " placeholder="Email" />
                    <input className="bg-white w-full px-4 py-2.5 text-black placeholder:text-gray-500 my-2.5 mx-4 rounded-lg " placeholder="Whatsapp" />
                    <textarea className="bg-white w-full px-4 py-2.5 text-black placeholder:text-gray-500 my-2.5 mx-4 rounded-lg " rows={4} cols={50} placeholder="infos" />
                    <input className="bg-white w-full px-4 py-2.5 text-black placeholder:text-gray-500 my-2.5 mx-4 rounded-lg cursor-pointer hover:bg-purple-900 hover:text-white font-bold " type='submit' /> */}
                {/* </form> */}
            </div>
        </footer>
    )
}