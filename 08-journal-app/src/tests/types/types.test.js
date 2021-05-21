import { fixTypes } from "../fixtures/fixTypes";
import { types } from "../../types/types";

describe("Pruebas con nuestros tipos", () => {
	test("debe de tener estos tipos", () => {
		expect(fixTypes).toEqual(types);
	});
});
