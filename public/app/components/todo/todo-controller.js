function TodoController() {
	var todoService = new TodoService()
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		var template = ''
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];

			template += `
			<div class="item">
				<input class="todo-input" id="${todo._id}" onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')" type="checkbox"> 
				<span class="thing">${todo.name}</span>
				<button class="btn btn-danger" type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">x</button>
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
