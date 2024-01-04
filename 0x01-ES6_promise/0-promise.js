function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          status: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('Failed to fetch data from the API'));
      }
    }, 1000); 
  });
}

export default getResponseFromAPI;

