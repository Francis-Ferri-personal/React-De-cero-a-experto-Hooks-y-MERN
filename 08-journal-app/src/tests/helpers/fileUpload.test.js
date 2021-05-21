/**
 * @jest-environment jsdom
 */

import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
	cloud_name: "da2dkzgcb",
	api_key: "916383477764659",
	api_secret: "1tilb15j45E05tTi0wLRffmSb_Q"
});

describe("Pruebas en fileUpload", () => {
	test("debe de cargar un archivo y retornar el URL", async () => {
		// Revisar si esta funcion de setTimeout va aqui
		jest.setTimeout(10000);
		// A veces da un error por los headers si se usa otra imagen
		const resp = await fetch(
			"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
		);
		const blob = await resp.blob();

		const file = new File([blob], "foto.png");
		const url = await fileUpload(file);

		expect(typeof url).toBe("string");
		// Borrar imagen por ID
		const segments = url.split("/");
		const imageId = segments[segments.length - 1].replace(".png", "");
		await cloudinary.v2.api.delete_resources(imageId, {}, (error) => {
			expect(error).toBe(undefined);
		});
	});

	test("debe de retornar un error", async () => {
		const file = new File([], "foto.png");
		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
});
