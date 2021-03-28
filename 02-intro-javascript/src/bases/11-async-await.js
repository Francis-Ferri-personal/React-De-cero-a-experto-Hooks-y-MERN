
const getImagen = async () => {
    const urlBase = "api.giphy.com/v1/gifs/random";
    const apiKey = "gCeBMdfQEg0zrAx28yVuGcILYM60HEtX";
    try {
        const resp = await fetch(`http://${urlBase}?api_key=${apiKey}`);
        const {data} =  await resp.json();
        const url = data.images.original.url;
        const imagen = document.createElement("img");
        imagen.src=url;
        document.body.append(imagen);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
}

getImagen();

/* 



    .then(resp => )
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)
        const imagen = document.createElement("img");
        imagen.src=url;
        document.body.append(imagen)
    })
    .catch(console.warn)
// Se pueden encadenar los then
// Basta solamente un catch */