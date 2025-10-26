class TodoList {
  #todos = [];
  #nextId = 1;
  
  addTodo(title, priority = 'medium') {
    const todo = {
      id: this.#nextId++,
      title,
      priority,
      completed: false,
      createdAt: new Date()
    };
    this.#todos.push(todo);
    return todo;
  }
  
  completeTodo(id) {
    const todo = this.#findTodoById(id);
    if (todo) {
      todo.completed = true;
      todo.completedAt = new Date();
    }
  }
  
  #findTodoById(id) {
    return this.#todos.find(todo => todo.id === id);
  }
  
  getActiveTodos() {
    return this.#todos.filter(todo => !todo.completed);
  }
  
  getCompletedTodos() {
    return this.#todos.filter(todo => todo.completed);
  }
  
  get stats() {
    return {
      total: this.#todos.length,
      active: this.getActiveTodos().length,
      completed: this.getCompletedTodos().length
    };
  }
}

const todoList = new TodoList();
todoList.addTodo("Learn JavaScript", "high");
todoList.addTodo("Buy groceries", "medium");
todoList.completeTodo(1);

console.log(todoList.stats);
// { total: 2, active: 1, completed: 1 }