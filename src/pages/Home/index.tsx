import React from 'react'
import Header from '../../components/Header'
import Galeria from '../../components/Galeria'
import Masonry from 'react-masonry-css';
import Logo from '../../components/Logo'
import FotoGabriel from '../../assets/gabriel.jpg'
import Line from '../../components/Line';
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { photos, photosMatch, photosNew } from '../../constants';
import { useNavigate, useNavigation } from 'react-router-dom';
import LP from '../../assets/Lima.svg'
import Footer from '../../components/Footer';

export default function Home() {
    const navigate = useNavigate();


    return (
        <main className=''>
            <Header />
            <section className='w-full h-screen bg-#000000ad' id='portifolio'>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <div>
                        <img src={LP} className='w-full' />
                    </div>
                    <h1 className='md:text-9xl text-4xl font-pixel text-white'>Meu Portifólio</h1>
                    <h2 className='md:text-7xl text-3xl font-pixel  text-gray-300'>
                        Fotografia
                    </h2>

                </div>

            </section>

            <section className='w-full h-screen  md:pb-36 bg-transparent-black' id='profissional'>
                <Line />
                <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>

                    <div className=' md:w-1/2 flex flex-row items-center justify-center rounded-full '>
                        <img src={FotoGabriel} className='rounded-full border-2 border-black w-48 h-48 md:w-110  md:h-110 ' />
                    </div>
                    <div className='w-full px-5 md:w-1/2 md:ml-10 flex flex-col justify-start items-start'>
                        <h1 className='text-white text-3xl mb-5 font-pixel w-full '>
                            Gabriel Lima
                        </h1>
                        <p className='text-white w-full md:w-1/2 text-sm md:text-lg font-pixel tracking-wide leading-loose'>
                            Bem-vindo ao meu mundo fotográfico, onde cada momento especial é capturado com sensibilidade e criatividade. Do amor eterno dos casamentos à delicadeza dos recém-nascidos, cada sessão conta uma história única. Explore meu portfólio e deixe-se envolver pelas memórias que crio.
                        </p>
                        <div>
                            <h4 className='text-xl font-pixel text-white mt-5'>
                                Tipos de Ensaio Fotográficos
                            </h4>

                            <div className='mt-5  font-pixel grid grid-cols-2  '>
                                <span
                                    onClick={() => navigate('/details', {
                                        state: photosNew
                                    })}
                                    className='border-2 w-11/12 cursor-pointer border-white text-sm text-white px-2 py-2 rounded-3xl mx-4 my-2 flex justify-center'>
                                    Newborn
                                </span>
                                <span onClick={() => navigate('/details', {
                                    state: photos

                                })} className='border-2 w-11/12 cursor-pointer border-white text-white text-sm px-2 py-2 rounded-3xl mx-4 my-2 flex justify-center'>
                                    Casuais
                                </span>
                                <span onClick={() => navigate('/details', {
                                    state: photosMatch

                                })}
                                    className='border-2 mx-4 w-full cursor-pointer border-white text-white  text-sm px-2 py-2 rounded-3xl my-2 flex justify-center'>
                                    Casamentos
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section className='w-full md:h-full h-types bg-transparent-black  md:pb-20' id='casual'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center items-center md:pt-10'>
                    <div className='flex flex-col cursor-pointer' >
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'
                            onClick={() => navigate('/details', {
                                state: photos

                            })}>

                            Ensaios Casuais
                        </h3>
                    </div>



                </div>

            </section>

            <section className='w-full md:h-full h-types bg-transparent-black   md:pb-20' id='casamento'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center md:pt-10 items-center'>
                    <div className='flex flex-col cursor-pointer'>
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel' onClick={() => navigate('/details', {
                            state: photosMatch

                        })}>

                            Ensaios Casamento
                        </h3>
                    </div>



                </div>

            </section>
            <section className='w-full md:h-full h-types bg-transparent-black  md:pb-20' id='newborn'>
                <Line />
                <div className='flex flex-col w-full h-full justify-center items-center md:pt-10'>
                    <div className='flex flex-col cursor-pointer' >
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'
                            onClick={() => navigate('/details', {
                                state: photosNew
                            })}
                        >

                            Ensaios Newborn
                        </h3>
                    </div>
                </div>

            </section>
            <Footer />
        </main>
    )
}