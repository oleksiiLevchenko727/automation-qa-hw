const getTodo = () => {
return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        return response.json()
    })
    .then((todo) => {
       return todo;
    })
    .catch((error) => {
    console.error('Error:', error)
});
}
getTodo().then(todo => {
  console.log('todo is:', todo);
});

const getUser = () => {
return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
        return response.json()
    })
    .then((user) => {
       return user;
    })
    .catch((error) => {
    console.error('Error:', error)
});
}
getUser().then(user => {
  console.log('user is:', user);
});

Promise.all([
   getTodo(),
   getUser()
]).then((todoAndUser) => {
    console.log('Promise.all:', todoAndUser);
  });

Promise.race([
   getTodo(),
   getUser()
]).then((userAndTodo) => {
    console.log('Promice.race:', userAndTodo);
  });