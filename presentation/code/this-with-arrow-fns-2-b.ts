class UserService {
  _users: User[];

  prefetchUsers(): void {
    fetch('http://myapi.com/users')
      .then(body: Body => body.json())
      .then((users: User[]) => {
        // arrow function does not have its own `this` - it always uses the parent context's `this`
        // again, possible due to closures
        this._users = users;
      });
  }
}