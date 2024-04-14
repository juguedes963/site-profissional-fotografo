import React from 'react'
import Galeria from '../../components/Galeria'
import Masonry from 'react-masonry-css';
import { useLocation, useRoutes } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import Footer from '../../components/Footer';

export default function Details() {
    const location = useLocation()

    const photos: {
        photos: string,
        type: "casamento" | "reborn" | "casual" | "makeOff" | "preWelding"
    }[] = location.state;

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
    };
    const filteredMake = photos.filter(item => item.type == `makeOff`)
    const filteredMatch = photos.filter(item => item.type == `casamento`)
    const filteredPre = photos.filter(item => item.type == `preWelding`)

    return (
        <main className='w-full h-full flex flex-col bg-transparent-black justify-center items-center pt-10'>
            {photos.find(item => item.type == `reborn` || item.type == `casual`) && (

                <>
                    <div className='flex flex-row my-6'>
                        <MdKeyboardBackspace className='cursor-pointer mr-5' color='white' size={36} onClick={() => window.location.assign('/')} />
                        <div>
                            {
                                photos.find(item => item.type == `casual`) ? (
                                    < h3 className='  text-4xl font-pixel text-white'>
                                        Ensaios Casuais
                                    </h3 >
                                ) : (
                                    < h3 className=' text-4xl font-pixel text-white'>
                                        Ensaios Newborn
                                    </h3 >

                                )
                            }
                        </div>
                    </div>

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid w-full md:w-8/12 pr-3'
                        columnClassName='my-masonry-grid_column'
                    >

                        {photos.map((item, key) => {

                            return (
                                <>
                                    <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>

                                        <Galeria key={key} fotos={item.photos} />
                                    </div>

                                </>
                            )


                        })}
                    </Masonry>
                </>
            )
            }
            {
                filteredMatch.length > 1 && (
                    <>
                        <div className='flex flex-row items-center my-4 '>
                            <MdKeyboardBackspace className='cursor-pointer mr-5' color='white' size={36} onClick={() => window.location.assign('/')} />

                            < h3 className=' text-2xl md:text-4xl font-pixel text-white'>
                                Ensaios Casamento
                            </h3 >
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className='my-masonry-grid w-full md:w-8/12 pr-3'
                            columnClassName='my-masonry-grid_column'
                        >
                            {filteredMatch.map((item, key) => {
                                return (
                                    <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                        <Galeria key={key} fotos={item.photos} />
                                    </div>
                                )


                            })}
                        </Masonry>
                    </>

                )
            }
            {
                filteredMake.length > 1 && (
                    <>
                        <div className='flex flex-row '>
                            <div>
                                < h3 className='mb-5 text-4xl font-pixel text-white'>
                                    Make-Off
                                </h3 >


                            </div>
                        </div>

                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className='my-masonry-grid w-full md:w-8/12 pr-3'
                            columnClassName='my-masonry-grid_column'
                        >
                            {filteredMake.map((item, key) => {
                                return (
                                    <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                        <Galeria key={key} fotos={item.photos} />
                                    </div>
                                )


                            })}
                        </Masonry>
                    </>
                )
            }



            {
                filteredPre.length > 1 && (
                    <>
                        <div>
                            < h3 className='mb-5 text-4xl font-pixel text-white'>
                                Ensaios Pre-Welding
                            </h3 >
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className='my-masonry-grid w-full md:w-8/12 pr-3'
                            columnClassName='my-masonry-grid_column'
                        >
                            {filteredPre.map((item, key) => {
                                return (
                                    <div key={key} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                                        <Galeria key={key} fotos={item.photos} />
                                    </div>
                                )


                            })}
                        </Masonry>
                    </>


                )
            }
            <Footer />
        </main >


    )
}