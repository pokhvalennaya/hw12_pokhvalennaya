const promiseFulFilled = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Done");
  }, 5000);
});

const promiseRejected = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 5000);
});

promiseFulFilled
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise was finished!"));

promiseRejected
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise was finished!"));

async function getResolvePromise() {
  try {
    const result = await promiseFulFilled;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished!");
  }
}
getResolvePromise();

async function getRejectPromise() {
  try {
    const result = await promiseRejected;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished!");
  }
}
getRejectPromise();
