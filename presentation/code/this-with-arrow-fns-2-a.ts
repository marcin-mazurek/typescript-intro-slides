class UserService {
  _users: User[];

  prefetchUsers(): void {
    // storing reference to `this` to make it accessible from callbacks
    const context = this;

    fetch('http://myapi.com/users')
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        context._users = users;
      });
  }
}