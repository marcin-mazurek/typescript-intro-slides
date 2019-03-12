let upperScopeVariable;

fetchUsers((users) => {
  // variable from parent scope can be accessed
  upperScopeVariable = users;
});