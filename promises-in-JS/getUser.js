class User {
  async getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}


export default User;