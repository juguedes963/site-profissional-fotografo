import React from 'react'
import Header from '../../components/Header'
import Galeria from '../../components/Galeria'
import Masonry from 'react-masonry-css';
import FotoGabriel from '../../assets/gabriel.jpg'
import Line from '../../components/Line';
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { photos, photosMatch, photosNew } from '../../constants';


export default function Home() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
    };

    return (
        <main className=''>
            <Header />
            <section className='w-full h-screen ' id='portifolio'>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <h1 className='md:text-9xl text-4xl font-pixel text-white'>Meu Portifólio</h1>
                    <h2 className='md:text-7xl text-3xl font-pixel  text-gray-300'>
                        Fotografia
                    </h2>

                </div>

            </section>
            <section className='w-full h-screen  md:pb-36' id='profissional'>
                <Line />
                <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>

                    <div className=' md:w-1/2 flex flex-row items-center justify-center'>
                        <img src={FotoGabriel} className='rounded-full w-48 h-48 md:w-110  md:h-110 ' />
                    </div>
                    <div className='w-full px-5 md:w-1/2 md:ml-10 flex flex-col justify-start items-start'>
                        <h1 className='text-white text-3xl mb-5 font-pixel w-full '>
                            Gabriel Lima
                        </h1>
                        <p className='text-white w-full md:w-1/2 text-sm md:text-lg font-pixel tracking-wide leading-loose'>
                            Bem-vindo ao meu mundo fotográfico, onde cada momento especial é capturado com sensibilidade e criatividade. Do amor eterno dos casamentos à delicadeza dos recém-nascidos, cada sessão conta uma história única. Explore meu portfólio e deixe-se envolver pelas memórias que crio.
                        </p>
                        <div className='mt-5  font-pixel grid grid-cols-2 md:w-1/3 '>
                            <span className='border-2 border-white text-white px-2 py-2 rounded-3xl mx-2 my-2 flex justify-center'>
                                Newborn
                            </span>
                            <span className='border-2 border-white text-white px-2 py-2 rounded-3xl mx-2 my-2 flex justify-center'>
                                Casuais
                            </span>
                            <span className='border-2 mx-2 border-white text-white px-2 py-2 rounded-3xl my-2 flex justify-center'>
                                Casamentos
                            </span>
                        </div>
                    </div>
                </div>

            </section>
            <section className='w-full h-full   md:pb-20' id='casual'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center items-center md:pt-10'>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'>

                            Ensaios Casuais
                        </h3>
                    </div>


                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid  w-full md:w-8/12 pr-3'
                        columnClassName='my-masonry-grid_column'
                    >
                        {photos?.map((item, key) => {
                            console.log(item, key)
                            return (
                                <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                    <Galeria key={key} fotos={item.photos} />
                                </div>
                            )
                        })}
                    </Masonry>
                </div>

            </section>
            <section className='w-full h-full    md:pb-20' id='casamento'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center md:pt-10 items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'>

                            Ensaios Casamento
                        </h3>
                    </div>


                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid  w-full md:w-8/12 pr-3'
                        columnClassName='my-masonry-grid_column'
                    >
                        {photosMatch?.map((item, key) => {
                            console.log(item, key)
                            return (
                                <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                    <Galeria key={key} fotos={item.photos} />
                                </div>
                            )
                        })}
                    </Masonry>
                </div>

            </section>
            <section className='w-full h-full  md:pb-20' id='newborn'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center items-center md:pt-10'>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'>

                            Ensaios Newborn
                        </h3>
                    </div>


                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid w-full md:w-8/12 pr-3'
                        columnClassName='my-masonry-grid_column'
                    >
                        {photosNew?.map((item, key) => {
                            console.log(item, key)
                            return (
                                <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                    <Galeria key={key} fotos={item.photos} />
                                </div>
                            )
                        })}
                    </Masonry>
                </div>

            </section>
            <footer className=' h-full w-full flex flex-col justify-center items-center'>
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
                        onClick={()=>window.open('mailto:limagabriel260@gmail.com?subject=subject&body=body')}
                        >
                            limagabriel260@gmail.com
                        </span>
                    </div>

                </div>
            </footer>
        </main>
    )
}