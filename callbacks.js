const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = { message: "delayed success!" };
      const promiseResolved = true;
      if (promiseResolved) {
        resolve(success);
      } else {
        reject("Promise failed!");
      }
    }, 500);
  });
};

const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rejectPromise = true;
      let error = { error: "delayed exception!" };
      if (rejectPromise) {
        resolve(error);
      } else {
        reject("Promise was not rejected");
      }
    }, 500);
  });
};

resolvedPromise().then((value) => {
  console.log(value);
  return rejectPromise()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
});
