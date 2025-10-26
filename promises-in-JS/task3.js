const getTodo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error:', error);
    }
};

const logTodo = async () => {
    const todo = await getTodo();
    console.log(todo);
};