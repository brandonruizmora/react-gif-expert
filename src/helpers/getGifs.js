const returnStringwithPlus = (string) => string.replace(/\s/g, '+');

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${returnStringwithPlus(category)}&limit=10&api_key=wdWacmMjrRbeecYtuiEnvd2wTPdJCEQQ`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });
    return gifs;
}