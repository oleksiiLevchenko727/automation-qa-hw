
const getTodo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error:', error);
    }
}
const todoId = await getTodo()
console.log('todo is:', todoId);

const getUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error);
    }
}
const userId = await getUser()
console.log('user is:', userId);
