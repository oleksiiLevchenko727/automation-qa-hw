import User from './getUser.js';
import Todo from './getTodo.js';

const userInstance = new User();
const todoInstance = new Todo();

(async () => {
  const user = await userInstance.getUser();
  console.log('User is:', user);

  const todo = await todoInstance.getTodo();
  console.log('Todo is:', todo);
})();