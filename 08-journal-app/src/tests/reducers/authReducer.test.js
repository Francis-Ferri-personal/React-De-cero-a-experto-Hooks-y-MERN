import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
	test("debe de realizar el login", () => {
		const initState = {};

		const action = {
			type: types.login,
			payload: {
				uid: "ABDSdshajsh",
				displayName: "Francis"
			}
		};

		const state = authReducer(initState, action);

		expect(state).toEqual({
			uid: action.payload.uid,
			name: action.payload.displayName
		});
	});

	test("debe realizar el logout", () => {
		const initState = {
			uid: "ABDSdshajsh",
			name: "Francis"
		};
		const action = { type: types.logout };
		const state = authReducer(initState, action);
		expect(state).toEqual({});
	});

	test("no debe de hacer cambios en el state", () => {
		const initState = {
			uid: "ABDSdshajsh",
			name: "Francis"
		};

		const action = {
			type: "no existe"
		};
		const state = authReducer(initState, action);

		expect(state).toEqual(initState);
	});
});
