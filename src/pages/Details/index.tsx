import React from 'react'
import Galeria from '../../components/Galeria'
import Masonry from 'react-masonry-css';
import { useLocation, useRoutes } from 'react-router-dom';

export default function Details() {
    const { state } = useLocation()

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
    };
    console.log(state)
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid w-full md:w-8/12 pr-3'
                columnClassName='my-masonry-grid_column'
            >
                {/* {photosNew?.map((item, key) => {
                    console.log(item, key)
                    return (
                        <div key={props} className='relative aspect-w-1 aspect-h-1 gap-4 hover:bg-transparent bg-red'>
                            <Galeria key={props} fotos={props.photos} />
                        </div>
                    )
                })} */}
            </Masonry>

        </>


    )
}