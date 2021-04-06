import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    /* const [images, setImages] = useState([]);

    // Si la categoria cambia se a a bvolver a ejecutar este efecto
    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
            .catch(console.log)
    }, [category]);
 */
    

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {
                        images.map((img) => (
                            <GifGridItem 
                                key={img.id} 
                                {...img}/>
                        ))
                    };
            </div>
        </>
    )
}

export default GifGrid
