import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import { startLogin, startRegister } from "../../../actions/auth";
import Swal from "sweetalert2";

jest.mock("../../../actions/auth", () => ({
	startLogin: jest.fn(),
	startRegister: jest.fn()
}));

jest.mock("sweetalert2", () => ({
	fire: jest.fn()
}));

const middlewares = [thunk];
const storeMock = configureStore(middlewares);

const initState = {};
const store = storeMock(initState);

store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<LoginScreen />
	</Provider>
);

describe("Pruebas en <LoginScreen />", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("debe de mostarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe llamar el dispatch del login", () => {
		wrapper.find('input[name="lEmail"]').simulate("change", {
			target: {
				name: "lEmail",
				value: "juan@gmail.com"
			}
		});
		wrapper.find('input[name="lPassword"]').simulate("change", {
			target: {
				name: "lPassword",
				value: "123456"
			}
		});

		wrapper.find("form").at(0).prop("onSubmit")({
			preventDefault() {}
		});
		expect(startLogin).toHaveBeenCalledWith("juan@gmail.com", "123456");
	});

	test("no hay registro si las contraseñas son diferentes", () => {
		//1-2... rPassword1 rPassword, simulate
		wrapper.find('input[name="rPassword1"]').simulate("change", {
			target: {
				name: "rPassword1",
				value: "123456"
			}
		});

		wrapper.find('input[name="rPassword2"]').simulate("change", {
			target: {
				name: "rPassword2",
				value: "654321"
			}
		});

		wrapper.find("form").at(1).prop("onSubmit")({
			preventDefault() {}
		});

		expect(startRegister).not.toHaveBeenCalled();
		expect(Swal.fire).toHaveBeenCalledWith(
			"Error",
			"Las contraseñas deben de ser iguales",
			"error"
		);
	});

	test("Registro con contraseñas iguales", () => {
		//1-2... rPassword1 rPassword, simulate
		wrapper.find('input[name="rPassword1"]').simulate("change", {
			target: {
				name: "rPassword1",
				value: "123456"
			}
		});

		wrapper.find('input[name="rPassword2"]').simulate("change", {
			target: {
				name: "rPassword2",
				value: "123456"
			}
		});

		wrapper.find("form").at(1).prop("onSubmit")({
			preventDefault() {}
		});

		expect(startRegister).toHaveBeenCalledWith(
			"nando@gmail.com",
			"123456",
			"Nando"
		);
		expect(Swal.fire).not.toHaveBeenCalled();
	});
});
