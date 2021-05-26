import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enventDeleted } from "../../actions/events";

export const DeleteEventFab = () => {
	const dispatch = useDispatch();
	const { activeEvent } = useSelector((state) => state.calendar);

	const handleDelete = () => {
		dispatch(enventDeleted(activeEvent));
	};

	return (
		<button onClick={handleDelete} className="btn btn-danger fab-danger">
			<i className="fas fa-trash"></i>
			<span> Borrar evento</span>
		</button>
	);
};
