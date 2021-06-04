import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";

function App() {
	return (
		<>
			<h1>React + TypeScript</h1>
			<hr />

			<h2>useState</h2>
			<Counter />
			<Usuario />

			<hr />
			<h2>useEffect - useRef</h2>
			<TimerPadre />
			<hr />
			<h2>useReducer</h2>
			<ContadorRed />

			<h2>customHooks</h2>
			<hr />
			<Formulario />

			<br />
			<Formulario2 />

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}

export default App;
