import {
	removeError,
	setError,
	uiFinishLoading,
	uiStartLoading
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Pruebas en ui-actions", () => {
	test("Todas las acciones deben de funcionar", () => {
		const error = "error";

		const action = setError(error);

		expect(action).toEqual({
			type: types.uiSetError,
			payload: error
		});

		const removeErrorAction = removeError();

		expect(removeErrorAction).toEqual({
			type: types.uiRemoveError
		});

		const uiStartLoadingAction = uiStartLoading();

		expect(uiStartLoadingAction).toEqual({
			type: types.uiStartLoading
		});

		const uiFinishLoadingAction = uiFinishLoading();

		expect(uiFinishLoadingAction).toEqual({
			type: types.uiFinishLoading
		});
	});
});
