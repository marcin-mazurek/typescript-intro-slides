interface UserModel {
  id: number,
  name: string,
  age: number
};

const transformUserModel = (user: UserDTO, id: number): UserModel => ({
  id: id,
  name: user.name,
  age: user.details.age
}); // wrap in parentheses to return an object

const transformUserListModel = (response: UserListDTO): UserModel[] => {
  let counter = 0;

  return response.users.map(
    user => transformUserModel(user, counter++)
  );
}; // wrap in brackets to declare a function body with `return` keyword

