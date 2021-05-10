import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskInput(props) {
	const [task, setTask] = useState("");

	return (
		<>
			<div className="card-body">
				<form
					action=""
					onSubmit={() => {
						event.preventDefault();
						if (task != "") {
							props.addTask(task);
						}
						setTask("");
					}}>
					<input
						type="text"
						className="form-control"
						id="task"
						placeholder={
							props.cantTasks > 0
								? "Add a new task"
								: "No tasks, add a task"
						}
						onChange={event => {
							setTask(event.target.value);
						}}
						value={task}
					/>
				</form>
			</div>
		</>
	);
}

TaskInput.propTypes = {
	addTask: PropTypes.func,
	cantTasks: PropTypes.number
};
