function TodoService() {
	// A local copy of your todos
	var todoList = []

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
	}

	this.getTodos = function (draw) {
		// You probably don't need to change anything in this function.....
		$.get('/api/todos')
			.then((todos) => {
				todoList = todos // <-- WHY IS THIS IMPORTANT????
				draw(todoList) // <-- WHERE DOES THIS DRAW FUNCTION COME FROM???
				console.log(todoList)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post('/api/todos', todo)
			.then(getTodos) // <-- DO NOT CHANGE THIS IT WORKS BUT DO YOU KNOW WHY?
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH

		var todo = todoList.find(todo => todo._id == todoId)
		if (todo.complete == false) {
			todo.complete = true;
		} else {
			todo.complete = false;
		}

		//STEP 1: Find the todo by its id **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: '/api/todos/' + todoId,
			data: JSON.stringify(todo)
		})
			.then((message) => {
				getTodos()
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, getTodos) {
		$.ajax({
			contentType: 'application/json',
			method: 'DELETE',
			url: '/api/todos/' + todoId

		})
			.then(getTodos)
			.fail(logError)
	}



	// I KNOW LOTS OF CODE RIGHT

}
