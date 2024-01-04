import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(`Body: ${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();

