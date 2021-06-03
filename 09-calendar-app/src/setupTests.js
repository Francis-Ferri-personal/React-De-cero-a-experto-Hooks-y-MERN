import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// Esta funcion producia un error por que trataba de abrir el Modal
HTMLCanvasElement.prototype.getContext = () => {};
