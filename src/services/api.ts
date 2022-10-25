import { getAPIClient } from "./axios";

export const api = getAPIClient();

export const authenticate = (email: string, password: string) => {
  //#region Autenticação
  var requestData = {
    email: email,
    password: password,
  };

  api
    .post("Account/authenticate", requestData)
    .then(function (response) {
      console.log(JSON.stringify(response));
    })
    .catch(function (error) {
      console.log(error);
    });

  //#endregion
};
