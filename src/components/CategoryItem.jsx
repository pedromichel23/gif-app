import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export function CategoryItem({categoryTitle}) {
    const {images, isLoading} = useFetchGifs(categoryTitle)
    console.log(isLoading)

    return (
        <>
            <h3>{categoryTitle}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {images.map(image => {
                    return (
                        <GifItem key={image.id} title={image.title} url={image.url} />
                    )
                })}
            </div>
        </>
        
    )
}