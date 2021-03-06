/**
 * @jest-environment jsdom
 */

import React from "react";

import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk];
const mockstore = configureStore(middlewares);

const initState = {};

const store = mockstore(initState);
store.dispatch = jest.fn();
const nota = {
	id: 10,
	date: 0,
	title: "Hola",
	body: "Mundo",
	url: "https://algunlugar.com/foto.jpg"
};
const wrapper = mount(
	<Provider store={store}>
		<JournalEntry {...nota} />
	</Provider>
);

describe("Preubeas en <JournalEntry />", () => {
	test("debe de mostrase correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de activar la nota", () => {
		wrapper.find(".journal__entry").prop("onClick")();
		expect(store.dispatch).toHaveBeenCalledWith(
			activeNote(nota.id, { ...nota })
		);
	});
});
