import React, { useEffect, useState } from "react";

const Home = () => {

	const apiUrl = 'https://playground.4geeks.com/todo'
	const userName = 'RicardoMiguelR'

	const [task, setTask] = useState('')
	const [list, setList] = useState([])
	const [deleteHover, setDeleteHover] = useState();
	const [count, setCount] = useState(0);

	// Función para traer las tareas ->

	const getTasks = async () => {
		const response = await fetch(`${apiUrl}/users/${userName}`)
		const data = await response.json()
		if (response.ok) {
			setList(data.todos)
			setCount(data.todos.length);
			return true 
		}
		return false 
	}
	
	// Función para agregar una tarea ->

	const addTask = async (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			const trimmedValue = task.trim();
			if (trimmedValue !== '') {
				const newTask = { label: trimmedValue, done: false };
				const response = await fetch(`${apiUrl}/todos/${userName}`, {
					method: 'POST',
					body: JSON.stringify(newTask),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				if (response.ok) {
					setList([...list, { ...newTask, id: data.id }]);
					setTask('');
					setCount(count + 1);
				} else {
					console.error('Error adding task:', data);
				}
			} else {
				alert("Hey Hey hey! You haven't entered anything brother, add a task please");
			}
		}
	};

	// Función para eliminar una tarea ->

	const deleteTask = async (todoId) => {
		const response = await fetch(`${apiUrl}/todos/${todoId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			setList(list.filter(task => task.id !== todoId));
			setCount(count - 1);
		} else {
			console.error('Error deleting task:', data);
		}
	}
	
	useEffect(() => {
		getTasks();
	}, [])

	return (
		<>
		<div className="text-end mt-5 mx-5">
			<h1 className="Title mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-journal-text mb-1 mx-2" viewBox="0 0 16 16">
					<path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
					<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
					<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
				</svg>
				TO DO LIST
			</h1>
			<div className="todo-box">
				<input maxLength='42' onKeyDown={addTask} onChange={(e) => { setTask(e.target.value) }} value={task} className="todo-input form-control p-3" type="text" placeholder='Add Tasks By Pressing Enter Please'/>
					<ul className="list"> {list.map((item, index) => (
						<li className="task-absolute mt-3 mx-1" key={item.id} 
						onMouseEnter={() => setDeleteHover(index)} onMouseLeave={() => setDeleteHover()}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
							</svg> {item.label}
							 {deleteHover === index && (
							<span style={{cursor: "pointer", color: 'rgba(27, 16, 179, 0.527)'}} onClick={() => deleteTask(item.id)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-circle-fill ms-3" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
								</svg>
							</span> )}
						</li>
					))}
					</ul>
					<p className="add-count"> {count === 0 ? 'No Tasks Added...' : count + ' Added Task'}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
							<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
						</svg>
					</p>
			</div>
		</div>
		</>
	);
};

export default Home;
