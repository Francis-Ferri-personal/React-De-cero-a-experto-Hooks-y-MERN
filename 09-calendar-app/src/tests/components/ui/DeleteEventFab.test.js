import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { DeleteEventFab } from "../../../components/ui/DeleteEventFab";
import { eventStartDelete } from "../../../actions/events";

jest.mock("../../../actions/events", () => ({
	eventStartDelete: jest.fn()
}));

const middlewares = [thunk];
const storeMock = configureStore(middlewares);

const initState = {};
const store = storeMock(initState);

store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<DeleteEventFab />
	</Provider>
);

describe("Pruebas en <DeleteEventFab />", () => {
	test("debe de mostrarse corretamnete", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe de llamar el eventStartDelete al hacer clic", () => {
		wrapper.find("button").prop("onClick")();
		expect(eventStartDelete).toHaveBeenCalled();
	});
});
