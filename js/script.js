var app = new Vue(
    {
        el: '#root',
        data: {
            newTodoText: '',
            todos: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            addNewTodo() {
                if(this.newTodoText.length > 0) {
                    // Pushare nell'array newTodoText
                    this.todos.push(this.newTodoText);
                    this.newTodoText = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    }
);