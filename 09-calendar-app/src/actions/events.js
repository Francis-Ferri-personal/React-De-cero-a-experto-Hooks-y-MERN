import { types } from "../types/types";

export const eventAddNew = (event) => ({
	type: types.eventAddNew,
	payload: event
});

export const eventSetActive = (event) => {
	delete event.bgcolor;
	return {
		type: types.eventSetActive,
		payload: event
	};
};

export const eventClearActiveEvent = () => ({
	type: types.eventClearActiveEvent
});

export const eventUpdated = (event) => ({
	type: types.eventUpdated,
	payload: event
});

export const enventDeleted = (event) => ({
	type: types.eventDeleted,
	payload: event
});
