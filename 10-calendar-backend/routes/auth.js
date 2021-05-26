/*     
    Rutas de usuarios / Autenticacion
    host + /api/auth
 */

const { Router } = require("express");
const router = Router();

const { check } = require("express-validator");

const {
	crearUsuario,
	loginUsuario,
	revalidatToken
} = require("../controllers/auth");

router.post(
	"/new",
	[
		// Middlewares
		check("name", "El nombre es obligatorio").not().isEmpty(),
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe de ser de 6 cartacteres").isLength({
			min: 6
		})
	],
	crearUsuario
);

router.post(
	"/",
	[
		check("email", "El email es obligatorio").isEmail(),
		check("password", "El password debe de ser de 6 cartacteres").isLength({
			min: 6
		})
	],
	loginUsuario
);

router.get("/renew", revalidatToken);

module.exports = router;
