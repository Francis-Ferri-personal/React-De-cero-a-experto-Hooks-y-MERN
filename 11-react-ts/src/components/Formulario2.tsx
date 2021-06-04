import { useForm } from "../hooks/useForm";

interface FormData {
	postal: string;
	ciudad: string;
}

export const Formulario2 = () => {
	const { postal, ciudad, handleChange, formulario } = useForm<FormData>({
		postal: "ABC",
		ciudad: "Ottawa"
	});

	return (
		<form autoComplete="off">
			<div className="mb-3">
				<label className="form-label">Codigo postal:</label>
				<input
					type="email"
					className="form-control"
					name="postal"
					value={postal}
					onChange={handleChange}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">CIudad:</label>
				<input
					type="text"
					className="form-control"
					name="ciudad"
					value={ciudad}
					onChange={handleChange}
				/>
			</div>
			{/* <div className="mb-3">
				<label className="form-label">Edad:</label>
				<input
					type="text"
					className="form-control"
					name="edad"
					value={edad}
					onChange={handleChange}
				/>
			</div> */}

			<pre>{JSON.stringify(formulario)}</pre>
		</form>
	);
};
