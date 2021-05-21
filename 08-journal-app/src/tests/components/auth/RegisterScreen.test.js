/**
 * @jest-environment jsdom
 */
import React from "react";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";

const middlewares = [thunk];

const mockstore = configureStore(middlewares);

const initState = {
	ui: {
		loading: false,
		msgError: null
	}
};

const store = mockstore(initState);

const wrapper = mount(
	<Provider store={store}>
		<MemoryRouter>
			<RegisterScreen />
		</MemoryRouter>
	</Provider>
);

describe("Pruebas en <RegisterScreen />", () => {
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de hacer el dispatch de la accion respectiva", () => {
		const emailField = wrapper.find('input[name="email"]');
		emailField.simulate("change", {
			target: {
				value: "",
				name: "email"
			}
		});

		wrapper.find("form").simulate("submit", {
			precentDefault() {}
		});

		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: types.uiSetError,
			payload: "Email is not valid"
		});
	});

	test("debe de mostar a caja de alerta con el erro", () => {
		const initState = {
			ui: {
				loading: false,
				msgError: "Email no es correcto"
			}
		};

		const store = mockstore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<MemoryRouter>
					<RegisterScreen />
				</MemoryRouter>
			</Provider>
		);

		expect(wrapper.find(".auth__alert-error").exists()).toBe(true);
		expect(wrapper.find(".auth__alert-error").text().trim()).toBe(
			initState.ui.msgError
		);
	});
});
