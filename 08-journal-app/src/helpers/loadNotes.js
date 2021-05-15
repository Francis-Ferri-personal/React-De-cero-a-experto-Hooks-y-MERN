import { db } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
	const notesSnap = await db.collection(`${uid}/jornal/notes`).get();
	const notes = [];

	notesSnap.forEach((snapHijo) => {
		notes.push({
			id: snapHijo.id,
			...snapHijo.data()
		});
	});
	console.log(notes);

	return notes;
};
