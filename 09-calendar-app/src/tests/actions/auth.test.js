import confgureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Swal from "sweetalert2";
import "@testing-library/jest-dom";

import { startCheckling, startLogin, startRegister } from "../../actions/auth";
import { types } from "../../types/types";
import * as fetchModule from "../../helpers/fetch";

jest.mock("sweetalert2", () => ({
	fire: jest.fn()
}));

const middlewares = [thunk];
const mockStore = confgureStore(middlewares);

const initState = {};
let store = mockStore(initState);

// Hacer un mockl del localStorage para saber si se llamo
Storage.prototype.setItem = jest.fn();

let token = "";

describe("Pruebas en las acciones Auth", () => {
	beforeEach(() => {
		store = mockStore(initState);
		jest.clearAllMocks();
	});

	test("startLogin correcto", async () => {
		await store.dispatch(startLogin("eduardo@yahoo.com", "123456"));
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: { uid: expect.any(String), name: expect.any(String) }
		});

		expect(localStorage.setItem).toHaveBeenCalledWith(
			"token",
			expect.any(String)
		);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			"token-init-date",
			expect.any(Number)
		);

		// Recuperar valores de JEST mocks
		//console.log(localStorage.setItem.mock.calls);
		token = localStorage.setItem.mock.calls[0][1];
	});

	test("startLogin incorrecto", async () => {
		await store.dispatch(startLogin("eduardo@yahoo.com", "no-existe"));
		let actions = store.getActions();

		expect(actions).toEqual([]);
		expect(Swal.fire).toHaveBeenCalledWith(
			"Error",
			"Password incorrecto",
			"error"
		);
		await store.dispatch(startLogin("no.existe@yahoo.com", "no-existe"));
		actions = store.getActions();

		expect(Swal.fire).toHaveBeenCalledWith(
			"Error",
			"El usuario no existe con ese email",
			"error"
		);
	});

	test("startRegister correcto", async () => {
		fetchModule.fetchSinToken = jest.fn(() => ({
			// Se simula que tiene la funcion json
			json() {
				return {
					ok: true,
					uid: "123",
					name: "carlos",
					token: "ABC123ABC123"
				};
			}
		}));

		await store.dispatch(startRegister("test@test.com", "123456", "test"));
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: { uid: "123", name: "carlos" }
		});

		expect(localStorage.setItem).toHaveBeenCalledWith("token", "ABC123ABC123");
		expect(localStorage.setItem).toHaveBeenCalledWith(
			"token-init-date",
			expect.any(Number)
		);
	});

	test("startChecking correcto", async () => {
		// No podemos usar el localStorage porque ya esta heciendo un mock, aujnque usem9os ese mock solamente dentro de una funcion, como funciona por referencia en JAvaScript igual afectara globalmente, por lo cual la mejor opcion es reemplazar el ock con uno que nos devuelva una respuesta

		fetchModule.fetchConToken = jest.fn(() => ({
			json() {
				return {
					ok: true,
					uid: "123",
					name: "carlos",
					token: "ABC123ABC123"
				};
			}
		}));

		await store.dispatch(startCheckling());
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.authLogin,
			payload: { uid: "123", name: "carlos" }
		});

		expect(localStorage.setItem).toHaveBeenCalledWith("token", "ABC123ABC123");
	});
});
