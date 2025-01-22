export const getGifsOfCategory = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ID4rWK6TiNoN7USb76J6DxSyqGlHtbMr&q=${category}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img => {
        return (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    })
    console.log(gifs)
    return gifs
}