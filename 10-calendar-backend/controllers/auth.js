// Esto solo se hace para obtener el tipado
// Se usa res = response para que agreure ayudas
const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
	const { name, email, password } = req.body;

	// Manejo de erores
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: errors.mapped()
		});
	}
	res.status(201).json({
		ok: true,
		msg: "registro",
		name,
		email,
		password
	});
};

const loginUsuario = (req, res = response) => {
	const { email, password } = req.body;

	// Manejo de erores
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			ok: false,
			errors: errors.mapped()
		});
	}
	res.json({
		ok: true,
		msg: "registro",
		email,
		password
	});
};

const revalidatToken = (req, res = response) => {
	res.json({
		ok: true,
		msg: "renew"
	});
};

module.exports = {
	crearUsuario,
	loginUsuario,
	revalidatToken
};
