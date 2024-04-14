import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { PiInstagramLogoFill } from "react-icons/pi"
import Line from "./Line"

export default function Footer() {
    return (
        <footer className=' h-full bg-#000000ad w-full flex flex-col justify-center items-center'>
          
            <div className='mt-5  font-pixel grid grid-cols-1 md:w-1/3 '>
                <div className='flex flex-row px-5 cursor-pointer items-center justify-center'>
                    <IoLogoWhatsapp color='white' size={40} />
                    <span className='border-2 w-full border-white font-pixel text-white px-10 py-2 rounded-3xl mx-2 my-2 flex justify-center' onClick={() => {

                        window.open(`https://api.whatsapp.com/send?phone=5511959728555&text=ol%C3%A1%20gostaria%20de%20marcar%20uma%20sess%C3%A3o%20de%20para%20fotos%20!!`)
                    }}>
                        +55 11 95972-8555
                    </span>
                </div>
                <div className='flex flex-row  px-5 items-center cursor-pointer justify-center'>
                    <PiInstagramLogoFill color='white' size={40} />
                    <span className='border-2 w-full border-white font-pixel text-white px-10 py-2 rounded-3xl mx-2 my-2 flex justify-center'
                        onClick={() => {

                            window.open(`https://www.instagram.com/limaphotography21/`)
                        }}
                    >
                        @limaphotography21
                    </span>
                </div>
                <div className='flex flex-row  px-5 items-center justify-center cursor-pointer'>
                    <MdEmail color="white" size={40} />
                    <span className='border-2 mx-2 w-full border-white font-pixel text-white px-10 py-2 rounded-3xl my-2 flex justify-center'
                        onClick={() => window.open('mailto:limagabriel260@gmail.com?subject=subject&body=body')}
                    >
                        limagabriel260@gmail.com
                    </span>
                </div>

            </div>
        </footer>
    )
}