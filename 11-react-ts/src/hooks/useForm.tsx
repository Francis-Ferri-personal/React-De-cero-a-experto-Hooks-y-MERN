import { ChangeEvent, useState } from "react";

// La <T> signifca tipo de dato generico, es decir que se vuelveel tipo de dato que se mande a el
// export function useForm<T>(initState: T) {

export const useForm = <T extends Object>(initState: T) => {
	const [formulario, setFormulario] = useState(initState);
	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormulario({
			...formulario,
			[name]: value
		});
	};
	return { ...formulario, handleChange, formulario };
};
