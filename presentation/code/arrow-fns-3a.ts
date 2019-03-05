const transformUserModel = (user, id) => ({
  id: id,
  name: user.name,
  age: user.details.age
});