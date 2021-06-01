import moment from "moment";

export const prepareEvents = (events = []) => {
	// Combierte fecha en string a fecha en objeto
	return events.map((e) => ({
		...e,
		end: moment(e.end).toDate(),
		start: moment(e.start).toDate()
	}));
};
