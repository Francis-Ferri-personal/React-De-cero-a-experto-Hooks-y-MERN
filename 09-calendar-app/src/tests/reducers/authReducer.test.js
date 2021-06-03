import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initState = {
	checking: true
};

describe("Pruebas en authReducer", () => {
	test("debe de retornar el estado por defecto", () => {
		const action = {};
		const state = authReducer(initState, action);
		expect(state).toEqual(initState);
	});

	test("debe de autenticar el usuario", () => {
		const action = {
			type: types.authLogin,
			payload: {
				uid: "12345656",
				name: "test"
			}
		};
		const state = authReducer(initState, action);
		expect(state).toEqual({ checking: false, uid: "12345656", name: "test" });
	});

	test("debe de terminar de revisar la autenticacion del usuario", () => {
		const user = {
			uid: "12345656",
			name: "test"
		};
		const action = { type: types.authCheckingFinish };
		const state = authReducer({ user, checking: true }, action);
		expect(state).toEqual({
			checking: false,
			user: {
				uid: "12345656",
				name: "test"
			}
		});
	});

	test("authLogout ", () => {
		const user = {
			uid: "12345656",
			name: "test"
		};

		const action = { type: types.authLogout };
		const state = authReducer({ user, checking: false }, action);
		expect(state).toEqual({ checking: false });
	});
});
