const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
	title: {
		type: String,
		required: true
	},
	notes: {
		type: String
	},
	start: {
		type: Date,
		required: true
	},
	end: {
		type: Date,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "Usuario",
		required: true
	}
});

EventoSchema.method("toJSON", function () {
	// Asigna el resto de los valores al objeto. Esto se usa por que al enviaar unobjeto, este es tranformado directamente a JSON
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

module.exports = model("Evento", EventoSchema);
