import React from "react";
import "../sass/Checkbox.sass";
import { useStateValue } from "./StateProvider";

function Checkbox(props) {
	const [{ filtersArray }, dispatch] = useStateValue();
	const handleChange = async (event) => {
		console.log("event.target.checked", event.target.checked);
		if (event.target.checked) {
			await dispatch({
				type: "ADD_TO_FILTER",
				item: {
					label: props.label,
				},
			});
			// console.log("value in filtersArray", filtersArray);
		} else {
			await dispatch({
				type: "REMOVE_FROM_FILTER",
				item: {
					label: props.label,
				},
			});
			// console.log("value in filtersArray", filtersArray);
		}
	};
	return (
		<label className="checkbox">
			<span className="checkbox__input">
				<input
					type="checkbox"
					name="checkbox"
					onChange={(event) => handleChange(event)}
				/>
				<span className="checkbox__control">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						aria-hidden="true"
						focusable="false"
					>
						<path
							fill="none"
							stroke="white"
							strokeWidth="3"
							d="M1.73 12.91l6.37 6.37L22.79 4.59"
						/>
					</svg>
				</span>
			</span>
			<span className="radio__label">{props.label}</span>
		</label>
	);
}

export default Checkbox;
