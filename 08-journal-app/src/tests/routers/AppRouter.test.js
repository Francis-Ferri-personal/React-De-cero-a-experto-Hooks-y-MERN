/**
 * @jest-environment jsdom
 */
import React from "react";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
// import { login } from "../../actions/auth";

import { firebase } from "../../firebase/firebaseConfig";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "@testing-library/react";
import { login } from "../../actions/auth";

jest.mock("../../actions/auth", () => ({
	login: jest.fn()
}));

const middlewares = [thunk];
const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null
	},
	notes: {
		active: {
			id: "12234"
		},
		notes: []
	}
};

const mockstore = configureStore(middlewares);
let store = mockstore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter />", () => {
	test("debe de llamar el login si estoy autenticado", async () => {
		let user;
		await act(async () => {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword("test@testing.com", "123456");
			user = userCred.user;

			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter>
						<AppRouter />
					</MemoryRouter>
				</Provider>
			);
		});
		expect(login).toHaveBeenCalledWith("ZYKJFMnHjUes3K40u5tSVLseXrD3", null);
	});
});
