class UserService {
  _users: User[];

  prefetchUsers(): void {
    // storing reference to `this` to make it accessible from callbacks
    const context = this;

    fetch('http://myapi.com/users')
      .then(function (body: Body) {
        return body.json();
      })
      .then(function (users: User[]) {
        // possible to access variables from the parent functions due to closures
        context._users = users;
      });
  }
}