const urlBase = "api.giphy.com/v1/gifs/random";
const apiKey = "gCeBMdfQEg0zrAx28yVuGcILYM60HEtX";

const peticion = fetch(`http://${urlBase}?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        console.log(url)
        const imagen = document.createElement("img");
        imagen.src=url;
        document.body.append(imagen)
    })
    .catch(console.warn)
// Se pueden encadenar los then
// Basta solamente un catch