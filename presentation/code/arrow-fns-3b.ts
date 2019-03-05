const transformUserListModel = response => {
  let counter = 0;

  return response.users.map(
    user => transformUserModel(user, counter++)
  );
};
