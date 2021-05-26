// El FAB es de form action button creo
import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = ({ onClick }) => {
	const dispatch = useDispatch();

	const handleClickView = () => {
		dispatch(uiOpenModal());
	};

	return (
		<button onClick={handleClickView} className="·btn btn-primary fab">
			<i className="fas fa-plus"></i>
		</button>
	);
};
