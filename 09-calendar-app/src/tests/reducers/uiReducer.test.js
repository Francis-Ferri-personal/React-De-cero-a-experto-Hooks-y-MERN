import { uiCloseModal, uiOpenModal } from "../../actions/ui";
import { uiReducer } from "../../reducers/uiReducer";

const initState = {
	modalOpen: false
};

describe("Pruebas en uiReducer", () => {
	test("debe de retornar el stado por defecto", () => {
		const state = uiReducer(initState, {});
		expect(state).toEqual(initState);
	});

	test("debe de abrir y cerrar el modal", () => {
		const modalOpen = uiOpenModal();
		const stateOpen = uiReducer(initState, modalOpen);

		expect(stateOpen).toEqual({ modalOpen: true });

		const modalCLose = uiCloseModal();
		const stateClose = uiReducer(initState, modalCLose);

		expect(stateClose).toEqual({ modalOpen: false });
	});
});
