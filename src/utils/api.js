import { call, put, select } from "redux-saga/effects";

const request = function*(request_function) {
  try {
    const response = yield call(request_function);
    console.log(response);
    return response;
  } catch (e) {
    if (e.status === 401) {
      console.log("UNAUTHORIZED!");
    }
    if (e.status === "network error") {
      console.log("NETWORK ERROR");
    }
    console.log(e.status);
    console.log(e);
    throw e;
  }
};

export const parseJSON = response => {
  console.log(response);
  if (response.status === 204) {
    const msg = { detail: "deleted" };
    return new Promise(resolve =>
      resolve({
        status: response.status,
        ok: response.ok,
        json: msg
      })
    );
  }
  return new Promise(resolve => {
    console.log(response.clone().text());
    response.json().then(json => {
      resolve({
        status: response.status,
        ok: response.ok,
        json
      });
    });
  });
};

export const parseBLOB = response => {
  console.log(response);
  return new Promise(resolve =>
    response.blob().then(blob =>
      resolve({
        status: response.status,
        ok: response.ok,
        blob
      })
    )
  );
};

export const requestHelper = (url, options) => {
  return new Promise((resolve, reject) => {
    if (options.file) {
      fetch(url, options)
        .then(parseBLOB)
        .then(response => {
          console.log(response);
          if (response.ok) {
            return resolve(response.blob);
          }
          // extract the error from the server's json
          return reject(response);
        })
        .catch(error =>
          reject({
            status: "network error",
            message: error.toString()
          })
        );
    }
    fetch(url, options)
      .then(parseJSON)
      .then(response => {
        console.log(response);
        if (response.ok) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject(response);
      })
      .catch(error =>
        reject({
          status: "network error",
          message: error.toString()
        })
      );
  });
};

export default request;
