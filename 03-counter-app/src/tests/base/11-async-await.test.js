import { getImagen } from "../../base/11-async-await"

describe('Ptruebas con async-await y fetch', () => {
    test('debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes("https://")).toBe(true);
    });
});



