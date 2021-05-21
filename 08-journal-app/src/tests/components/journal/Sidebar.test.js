/**
 * @jest-environment jsdom
 */

import React from "react";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { Sidebar } from "../../../components/journal/Sidebar";
import { startLogout } from "../../../actions/auth";
import { startNewNotes } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
	startLogout: jest.fn()
}));

jest.mock("../../../actions/notes", () => ({
	startNewNotes: jest.fn()
}));

const middlewares = [thunk];
const mockstore = configureStore(middlewares);

const initState = {
	auth: {
		uid: "1",
		name: "Test"
	},
	notes: {
		active: null,
		notes: []
	}
};

const store = mockstore(initState);
// Esto es super importante si quieres saber si se llamaron los dispatch
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<Sidebar />
	</Provider>
);
describe("Pruebas en <Sidebar />", () => {
	test("debe de mostrase correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de llamar el startlogout", () => {
		wrapper.find("button").prop("onClick")();
		expect(startLogout).toHaveBeenCalled();
	});

	test("debe de llamar el startNewNote", () => {
		wrapper.find(".journal__new-entry").prop("onClick")();
		expect(startNewNotes).toHaveBeenCalled();
	});
});
