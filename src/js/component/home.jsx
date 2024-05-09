import React from "react";
import TodoList from "./todo-fetch.jsx";

//create your first component
const Home = () => {

	// Función para agregar una tarea
function agregarTarea(tarea) {
    fetch('https://playground.4geeks.com/todo/users/RicardoMiguelR', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tarea: tarea }),
    })
    .then(response => {
        if (response.ok) {
            // Actualizar la interfaz de usuario después de agregar la tarea
        } else {
            // Manejar errores
        }
    });
}

// Función para eliminar una tarea
function eliminarTarea(idTarea) {
    fetch(`https://playground.4geeks.com/todo/users/RicardoMiguelR${idTarea}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Actualizar la interfaz de usuario después de eliminar la tarea
        } else {
            // Manejar errores
        }
    });
}

// Función para limpiar todas las tareas
function limpiarTareas() {
    fetch('https://playground.4geeks.com/todo/users/RicardoMiguelR', {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Actualizar la interfaz de usuario después de limpiar las tareas
        } else {
            // Manejar errores
        }
    });
}

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
				<TodoList />
		</div>
		</>
	);
};

export default Home;
