import { fetchConToken, fetchSinToken } from "../../helpers/fetch";

describe("Pruebas en el helper fetch", () => {
	let token = "";
	test("fetch sin token debe de funcionar", async () => {
		const resp = await fetchSinToken(
			"auth",
			{
				email: "eduardo@yahoo.com",
				password: "123456"
			},
			"POST"
		);
		expect(resp instanceof Response).toBe(true);

		const body = await resp.json();
		expect(body.ok).toBe(true);

		token = body.token;
	});

	test("ferchConToken debe funcionar", async () => {
		localStorage.setItem("token", token);
		const resp = await fetchConToken(
			"events/60b3b05eb0e285294024d403",
			{},
			"DELETE"
		);
		const body = await resp.json();

		expect(body.msg).toBe("Evento no existe con ese ID");
	});
});
