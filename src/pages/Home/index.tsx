import React from 'react'
import Header from '../../components/Header'
import Galeria from '../../components/Galeria'
import Masonry from 'react-masonry-css';
import FotoGabriel from '../../assets/gabriel.jpg'
const photos = [
    {
        photos: require('../../assets/casuais/c1.jpeg')
    },
    {
        
        photos: require('../../assets/casuais/c2.jpeg')
    },
    {
        
        photos: require('../../assets/casuais/c3.jpeg')
    },
    {
        
        photos: require('../../assets/casuais/c4.jpeg')
    },
    {
        
        photos: require('../../assets/casuais/c5.jpeg')
    },
]
export default function Home() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
    };

    return (
        <main>
            <section className='w-full h-screen bg-black'>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <h1 className='md:text-9xl text-4xl font-pixel text-white'>Meu Portifólio</h1>
                    <h2 className='md:text-7xl text-3xl font-dancing  text-gray-300'>
                        Fotografia
                    </h2>

                </div>
                <span className='border-2 border-white w-full px-5 flex flex-row justify-center items-center bg-red-400 ' >
                    a
                </span>
            </section>
            <section className='w-full h-screen bg-black '>
                <div className='flex flex-row justify-center items-center'>
                    <div className=' md:w-1/4 bg-white border-2  ' />
                </div>
                <div className='flex flex-col md:flex-row w-full h-full justify-center items-center'>

                    <div className=' md:w-1/2 flex flex-row items-center justify-center'>
                        <img src={FotoGabriel} className='rounded-full w-96  h-96 ' />
                    </div>
                    <div className='w-full px-5 md:w-1/2 md:ml-10 flex flex-col justify-start items-start'>
                        <h1 className='text-white text-3xl mb-5 font-pixel w-full '>
                            Gabriel Lima
                        </h1>
                        <p className='text-white w-full md:w-1/2 text-lg font-pixel tracking-wide leading-loose'>
                            Experiente em registros de eventos culturais,
                            retratos e fotografia publicitaria, capturo
                            momentos únicos, transmitindo emoções atraves
                            das imagens. Biologo por formação tambem me dedico á fotografia documental de paisagens
                            naturais e urbnas.
                        </p>
                        <div className='mt-5  font-pixel grid grid-cols-2 md:w-1/3 '>
                            <span className='border-2 border-white text-white px-2 py-2 rounded-3xl mx-2 my-2 flex justify-center'>
                                Retratos
                            </span>
                            <span className='border-2 border-white text-white px-2 py-2 rounded-3xl mx-2 my-2 flex justify-center'>
                                Eventos
                            </span>
                            <span className='border-2 border-white text-white px-2 py-2 rounded-3xl mx-2 my-2 flex justify-center'>
                                Publicidade
                            </span>
                            <span className='border-2 mx-2 border-white text-white px-2 py-2 rounded-3xl my-2 flex justify-center'>
                                Paisagens
                            </span>
                        </div>
                    </div>
                </div>

            </section>
            <section className='w-full h-screen bg-black'>

                <div className='flex flex-col w-full h-full justify-center items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-white text-left  text-3xl  mb-5 font-pixel'>
                           
                            Ensaios Casuais
                        </h3>
                    </div>


                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid w-8/12 pr-3'
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
        </main>
    )
}