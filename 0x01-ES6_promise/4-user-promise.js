function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const user = {
      firstName: firstName,
      lastName: lastName,
    };

    resolve(user);
  });
}

export default signUpUser;

