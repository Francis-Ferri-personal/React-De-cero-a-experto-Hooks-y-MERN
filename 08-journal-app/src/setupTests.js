import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// La funcion window.scrollTo da error por que la estamos usando en un entorno de pruebas
// Esto no funciono asi que añadi un "window.scrollTo = jest.fn()" a la prueba
/* const noScroll = () => {};
Object.defineProperty(window, "scrollTo", {
	value: noScroll,
	writable: true
});
 */

// Se hizo `por si el Sweet alert da problemas
// Esta es exportacion por defecto
jest.mock("sweetalert2", () => ({
	fire: jest.fn(),
	close: jest.fn()
}));
