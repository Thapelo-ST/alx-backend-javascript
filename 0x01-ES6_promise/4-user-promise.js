function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const user = {
      firstName,
      lastName,
    };

    resolve(user);
  });
}

export default signUpUser;
