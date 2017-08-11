function TodoController() {
	var todoService = new TodoService()

	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];

			template += `
			<div>
				${todo.name} 
				<input id="${todo._id}" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')" type="checkbox"> 
				<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">X</button>
			</div>
			`
		}
		document.getElementById("todo").innerHTML = template;
		checkComplete(todos)

	}

	function checkComplete(todos) {
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			if (todo.complete == true) {
				var x = document.getElementById(todo._id);
				x.checked = true;
			}
		}
	}
	this.addTodoFromForm = function (e) {
		e.preventDefault()
		var newTodo = e.target.name.value
		var todo = {
			name: newTodo
		}
		todoService.addTodo(todo, getTodos)
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		todoService.removeTodo(todoId, getTodos);
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos()
}
