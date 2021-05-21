import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import "@testing-library/jest-dom";

import {
	login,
	logout,
	startLoginEmailPassword,
	startLogout
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const initState = {};

const mockstore = configureStore(middlewares);
let store = mockstore(initState);

describe("Pruebas en las accion es de auth", () => {
	beforeEach(() => {
		store = mockstore(initState);
	});

	test("login y logout deben de crear la accion respectiva", () => {
		const uid = "TESTID";
		const displayName = "Test name";

		const actionLogin = login(uid, displayName);
		const actionLogout = logout();

		expect(actionLogin).toEqual({
			type: types.login,
			payload: {
				uid,
				displayName
			}
		});

		expect(actionLogout).toEqual({
			type: types.logout
		});
	});

	test("debe de realizar el startlogout", async () => {
		await store.dispatch(startLogout());
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: types.logout
		});
		expect(actions[1]).toEqual({
			type: types.notesLogoutCleaning
		});
	});

	test("debe de iniciar el startLoginWithEmailPassword", async () => {
		await store.dispatch(startLoginEmailPassword("test@testing.com", "123456"));
		const actions = store.getActions();
		expect(actions[1]).toEqual({
			type: types.login,
			payload: {
				uid: "ZYKJFMnHjUes3K40u5tSVLseXrD3",
				displayName: null
			}
		});
	});
});
