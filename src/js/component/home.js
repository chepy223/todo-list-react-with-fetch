import React, { useState, useEffect } from "react";
import TasksList from "./TasksList";
import TaskInput from "./TaskInput";
import TodoFooter from "./TodoFooter";

export function Home() {
	const [tasksList, setTasksList] = useState([]);
	const [user, setUser] = useState(false);

	useEffect(() => {
		getTasks();
	}, []);

	function addTask(task) {
		let newTask = { label: task, done: false };
		let newTaskList = [...tasksList, newTask];
		setTasksList(newTaskList);
		if (user) {
			updateTasks(newTaskList);
		} else {
			createUser();
			setTimeout(() => {
				updateTasks(newTaskList);
			}, 2000);
		}
	}

	function removeTask(pos) {
		let newTaskList = tasksList.filter((task, index) => {
			return index != pos;
		});
		setTasksList(newTaskList);

		if (newTaskList.length > 0) {
			updateTasks(newTaskList);
		} else {
			deleteUser();
		}
	}

	async function getTasks() {
		try {
			let res = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/Agus458"
			);
			let data = await res.json();

			if (!Array.isArray(data)) {
				await createUser();
				await getTasks();
			} else {
				setTasksList(data);
				setUser(true);
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function updateTasks(tasks) {
		try {
			let options = {
				method: "PUT",
				body: JSON.stringify(tasks),
				headers: { "Content-Type": "application/json" }
			};
			await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/Agus458",
				options
			);
		} catch (error) {
			console.error(error);
		}
	}

	async function createUser() {
		try {
			let options = {
				method: "POST",
				body: JSON.stringify([]),
				headers: { "Content-Type": "application/json" }
			};
			await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/Agus458",
				options
			);
			setUser(true);
		} catch (error) {
			console.error(error);
		}
	}

	async function deleteUser() {
		try {
			let options = {
				method: "DELETE"
			};
			await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/Agus458",
				options
			);
			setUser(false);
		} catch (error) {
			console.error(error);
		}
	}

	function clearAll() {
		if (user) {
			setTasksList([]);
			deleteUser();
		}
	}

	return (
		<div className="container text-center">
			<h1>todos</h1>
			<div className="card brown shadow-lg">
				<TaskInput cantTasks={tasksList.length} addTask={addTask} />
				<TasksList tasksList={tasksList} removeFromList={removeTask} />
				<TodoFooter cantTasks={tasksList.length} clearAll={clearAll} />
			</div>
		</div>
	);
}
