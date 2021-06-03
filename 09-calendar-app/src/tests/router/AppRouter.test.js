import React from "react";
import { mount } from "enzyme";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { AppRouter } from "../../router/AppRouter";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Pruebas en <AppRouter/>", () => {
	test("debe de mostar el espere", () => {
		const initState = { auth: { checking: true } };
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		// Esto va a fallar por que no se tiene el root en el ambiente de pruebas, por lo que se puede omitir este valor a traves de variables de entorno
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("h5").exists()).toBe(true);
	});

	test("debe de mostar la ruta publica", () => {
		const initState = { auth: { checking: false, uid: null } };
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(".login-container").exists()).toBe(true);
	});

	test("debe de mostar la ruta privada", () => {
		const initState = {
			auth: { checking: false, uid: "123", name: "Juan Carlos" },
			calendar: { events: [] },
			ui: { modalOpen: false }
		};
		const store = mockStore(initState);

		const wrapper = mount(
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);

		//expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(".calendar-screen").exists()).toBe(true);
	});
});
