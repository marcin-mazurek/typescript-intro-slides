class UserService {
  _users: User[];

  prefetchUsers(): void {
    fetch('http://myapi.com/users')
      .then(response => response.json())
      .then(users => {
        // arrow function does not have its own `this` - it always uses the parent context's `this`
        this._users = users;
      });
  }
}