import React from "react";
import PropTypes from "prop-types";

export default function TasksList(props) {
	return (
		<>
			<ul className="list-group list-group-flush">
				{props.tasksList.map((task, index) => {
					return (
						<li key={index} className="list-group-item">
							<div className="row">
								<div className="col">{task.label}</div>
								<div className="col-1 text-right">
									<i
										onClick={() => {
											props.removeFromList(index);
										}}
										className="fas fa-times"></i>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}

TasksList.propTypes = {
	tasksList: PropTypes.array,
	removeFromList: PropTypes.func
};
