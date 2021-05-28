// Esto solo se hace para obtener el tipado. Se usa res = response para que agreure ayudas
const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
	const { email, password } = req.body;
	try {
		let usuario = await Usuario.findOne({ email });
		if (usuario) {
			return res.status(400).json({
				ok: false,
				msg: "Un usuario existe con ese correo"
			});
		}
		// Ya con el Schema sabe que camps tiene y descarta los extras
		usuario = new Usuario(req.body);

		// Encriptar contraseña
		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();

		// Generar nuestro JWT
		const token = await generarJWT(usuario.id, usuario.name);

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Por favor hable con el administrador"
		});
	}
};

const loginUsuario = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		const usuario = await Usuario.findOne({ email });
		if (!usuario) {
			return res.status(400).json({
				ok: false,
				msg: "El usuario no existe con ese email"
			});
		}

		// COnfirmar los passsword
		const validPassword = bcrypt.compareSync(password, usuario.password);
		if (!validPassword) {
			return res.status(400).json({
				ok: false,
				msg: "Password incorrecto"
			});
		}

		// Generar nuestro JWT
		const token = await generarJWT(usuario.id, usuario.name);

		res.status(200).json({
			ok: true,
			uid: usuario.id,
			name: usuario.name,
			token
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: "Por favor hable con el administrador"
		});
	}
};

const revalidatToken = async (req, res = response) => {
	const { uid, name } = req;

	// generr un nuevo JWT y retornarlo en esta peticion
	const token = await generarJWT(uid, name);
	res.json({
		ok: true,
		token
	});
};

module.exports = {
	crearUsuario,
	loginUsuario,
	revalidatToken
};
