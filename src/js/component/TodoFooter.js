import React from "react";
import PropTypes from "prop-types";

export default function TodoFooter(props) {
	return (
		<div className="card-body">
			<div className="row align-items-center">
				<div className="col">
					<p>
						{props.cantTasks === 0
							? "You are up to date"
							: props.cantTasks === 1
							? `${props.cantTasks} task remaining`
							: `${props.cantTasks} tasks remaining`}
					</p>
				</div>
				<div className="col d-flex justify-content-end">
					<button
						onClick={() => {
							props.clearAll();
						}}
						className="btn btn-danger">
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}

TodoFooter.propTypes = {
	cantTasks: PropTypes.number,
	clearAll: PropTypes.func
};
