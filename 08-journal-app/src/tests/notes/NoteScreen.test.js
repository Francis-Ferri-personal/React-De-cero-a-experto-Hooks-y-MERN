/**
 * @jest-environment jsdom
 */

import React from "react";

import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { NoteScreen } from "../../components/notes/NoteScreen";
import { activeNote } from "../../actions/notes";

jest.mock("../../actions/notes", () => ({
	activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockstore = configureStore(middlewares);

const initState = {
	auth: {
		uid: "1",
		name: "Test"
	},
	ui: {
		loading: false,
		msgError: null
	},
	notes: {
		active: {
			id: "1234",
			title: "Hola",
			body: "mundo",
			date: 0
		},
		notes: []
	}
};

const store = mockstore(initState);
// Esto es super importante si quieres saber si se llamaron los dispatch
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<NoteScreen />
	</Provider>
);

describe("Pruebas en <NoteScreen />", () => {
	test("debe de mostrase coreectamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de disparar el active note", () => {
		wrapper.find('input[name="title"]').simulate("change", {
			target: {
				name: "title",
				value: "Hola de nuevo"
			}
		});

		// Se dispara dos veces el efecto, al inicair el objeto y al modficarlo, por eso no se usa solo toHaveBeenCalled
		expect(activeNote).toHaveBeenLastCalledWith("1234", {
			body: "mundo",
			title: "Hola de nuevo",
			id: "1234",
			date: 0
		});
	});
});
