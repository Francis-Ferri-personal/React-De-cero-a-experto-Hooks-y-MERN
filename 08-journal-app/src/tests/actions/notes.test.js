import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
	startLoadingNotes,
	startNewNotes,
	startSaveNote,
	startUploading
} from "../../actions/notes";
import { db } from "../../firebase/firebaseConfig";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload", () => ({
	fileUpload: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	auth: {
		uid: "TESTING"
	},
	notes: {
		active: {
			id: "6YVQRUeqMzER2NS8mxvV",
			title: String(new Date().getDay()),
			body: "body",
			url: "https://hola-muundo.com/cosa.jpg"
		}
	}
};

// El objeto es el estado deel store
let store = mockStore(initState);

describe("Pruebas con las acciones de notes", () => {
	beforeEach(() => {
		store = mockStore(initState);
	});

	test("debe de crear una nueva nota startNewNotes", async () => {
		await store.dispatch(startNewNotes());

		// Obtener las acciones que se dispararon
		const actions = store.getActions();
		// console.log(actions);

		expect(actions[0]).toEqual({
			type: types.notesActive,
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number)
			}
		});

		expect(actions[1]).toEqual({
			type: types.notesAddNew,
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number)
			}
		});

		const docId = actions[0].payload.id;
		await db.doc(`/TESTING/journal/notes/${docId}`).delete();
	});

	test("startLoadingNotes debe cargar las notas", async () => {
		await store.dispatch(startLoadingNotes("TESTING"));
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.notesLoad,
			payload: expect.any(Array)
		});

		const expected = {
			id: expect.any(String),
			title: expect.any(String),
			body: expect.any(String),
			date: expect.any(Number)
		};

		expect(actions[0].payload[0]).toMatchObject(expected);
	});

	test("startSaveNote debe de actualizar la nota", async () => {
		const note = {
			id: "6YVQRUeqMzER2NS8mxvV",
			title: String(new Date().getDay()),
			body: "body"
		};

		await store.dispatch(startSaveNote(note));

		const actions = store.getActions();
		// console.log(actions);

		expect(actions[0].type).toBe(types.notesUpdated);

		const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
		expect(docRef.data().title).toBe(note.title);
	});

	test("startUploading debe de actualizar el url del entry", async () => {
		//window.scrollTo = jest.fn();
		const file = ["foto.jpg"];
		await store.dispatch(startUploading(file));
		const docRef = await db
			.doc(`/TESTING/journal/notes/6YVQRUeqMzER2NS8mxvV`)
			.get();
		expect(docRef.data().title).toBe(String(new Date().getDay()));
	});
});
