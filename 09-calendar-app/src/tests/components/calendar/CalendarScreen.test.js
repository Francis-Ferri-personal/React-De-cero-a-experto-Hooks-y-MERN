import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { act } from "@testing-library/react";

import { CalendarScreen } from "../../../components/calendar/CalendarScreen";
import { messages } from "../../../helpers/calendar-messages-es";
import { types } from "../../../types/types";
import { eventSetActive } from "../../../actions/events";

jest.mock("../../../actions/events", () => ({
	eventStartLoading: jest.fn(),
	eventSetActive: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const storeMock = configureStore(middlewares);

const initState = {
	calendar: {
		events: []
	},
	auth: {
		uid: "ABC123ABC",
		name: "test"
	},
	ui: {
		modalOpen: false
	}
};
const store = storeMock(initState);

store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<CalendarScreen />
	</Provider>
);

describe("Pruebas en <CalendarScreen />", () => {
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("pruebas con las interacciones del calendario", () => {
		const calendar = wrapper.find("Calendar");

		const calendarMessages = calendar.prop("messages");
		expect(calendarMessages).toEqual(messages);

		calendar.prop("onDoubleClickEvent")();
		expect(store.dispatch).toHaveBeenCalledWith({ type: types.uiOpenModal });

		calendar.prop("onSelectEvent")({ start: "Hola" });
		expect(eventSetActive).toHaveBeenCalledWith({ start: "Hola" });

		act(() => {
			calendar.prop("onView")("week");
			expect(localStorage.setItem).toHaveBeenCalledWith("lastView", "week");
		});
	});
});
