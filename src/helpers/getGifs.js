
export const getGifs = async (category)=>{

    const API_KEY='TOomV2WCL97EOi7Fw6Jcx6sHjbj4yxmz';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ encodeURI(category) }&limit=10`

    const result = await fetch(url);
    const {data} = await result.json();
    const gifs = data.map(image=>{
        return {
            id:image.id,
            title:image.title,
            url:image.images.downsized_medium.url
        }
    })

    return gifs
}