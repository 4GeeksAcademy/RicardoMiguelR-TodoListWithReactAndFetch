import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState('');
	const [count, setCount] = useState(0);
	const [added, setAdded] = useState ([]);
	const [deleteHover, setDeleteHover] = useState();
	
	function addTask (e) {
		if (e.key == 'Enter') {
				e.preventDefault();
				const trimmedValue = task.trim();
			if (trimmedValue !== '') {
				setAdded([...added, trimmedValue]);
				setTask('');
				setCount(count + 1);
			} 
			else {
				alert('Hey Hey Hey! You Have Not Entered Anything Brother');
			}
		}
	}

	function deleteTask (index) {
		const byeTask = [...added];
    	byeTask.splice(index, 1);
    	setAdded(byeTask);
		setCount(count - 1)
	};

    return ( 
		<>
			<div className="todo-box">
				<input maxLength='42' onKeyDown={addTask} onChange={(e) => { setTask(e.target.value) }} value={task} className="todo-input form-control p-3" type="text" placeholder='Add Tasks By Pressing Enter Please'/>
					<ul className="list"> {added.map((added, index) => (
						<li className="task-absolute mt-3 mx-1" key={index} onMouseEnter={() => setDeleteHover(index)} onMouseLeave={() => setDeleteHover()}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
								<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
							</svg> {added} {deleteHover === index && (
							<span style={{cursor: "pointer", color: 'rgba(27, 16, 179, 0.527)'}} onClick={() => deleteTask(index)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill mx-3" viewBox="0 0 16 16">
									<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
								</svg>
							</span> )}
						</li>
					))}
					</ul>
					<p className="add-count"> {count == 0 ? 'No Tasks Added...' : count + ' Added Task'}
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
							<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
						</svg>
					</p>
			</div>
		</>
	);
};

export default TodoList;