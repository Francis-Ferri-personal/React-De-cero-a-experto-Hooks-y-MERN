/**
 * @jest-environment jsdom
 */
import React from "react";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { LoginScreen } from "../../../components/auth/LoginScreen";
import {
	startGoogleLogin,
	startLoginEmailPassword
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
	startGoogleLogin: jest.fn(),
	startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null
	}
};

const mockstore = configureStore(middlewares);
let store = mockstore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<LoginScreen />
		</MemoryRouter>
	</Provider>
);

describe("Pruebas en <LoginScreen/>", () => {
	// Expect wrapper.toMatchSnapshot
	beforeEach(() => {
		store = mockstore(initState);
		jest.clearAllMocks();
	});

	test("debe de mostrase correctamene", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de disparar la caccion de startGoogleLogin ", () => {
		wrapper.find(".google-btn").prop("onClick")();
		expect(startGoogleLogin).toHaveBeenCalled();
	});

	test("debe de dispara el startLogin con los respectivos argumentos", () => {
		wrapper.find("form").prop("onSubmit")({
			preventDefault() {}
		});
		// wrapper.find("form").simulate("submit");
		expect(startLoginEmailPassword).toHaveBeenCalledWith("", "");
	});
});
