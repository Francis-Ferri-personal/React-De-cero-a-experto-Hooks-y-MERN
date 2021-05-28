/*     
    Rutas de usuarios / Autenticacion
    host + /api/auth
 */

const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const {
	crearUsuario,
	loginUsuario,
	revalidatToken
} = require("../controllers/auth");

const { validarJWT } = require("../middlewares/validar-jwt");

router.post(
	"/new",
	[
		// Middlewares
		check("name", "El nombre es obligatorio").not().isEmpty(),
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe de ser de 6 cartacteres").isLength({
			min: 6
		}),
		validarCampos
	],
	crearUsuario
);

router.post(
	"/",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe de ser de 6 cartacteres").isLength({
			min: 6
		}),
		validarCampos
	],
	loginUsuario
);

router.get("/renew", validarJWT, revalidatToken);

module.exports = router;
