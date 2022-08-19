export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Wj3WQzk5G8ArC6rVt2l8X4UrYVh3nrHp&q=${ category }&limit=10`
    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    
    return gifs;
  } 

