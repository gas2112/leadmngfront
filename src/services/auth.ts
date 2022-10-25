import { api } from "./api";

export async function signInRequest(email: string, password: string) {
  let ret = null;
  var requestData = {
    email: email,
    password: password,
  };

  await api
    .post("Account/authenticate", requestData)
    .then(function (response) {
    //   console.log(JSON.stringify(response));
      ret = {
        token: response.data.data.jwToken,
        user: { username: response.data.username, email: response.data.email },
      };
    })
    .catch(function (error) {
      console.log(error);
    });

  return Promise.resolve(ret);
  // return ret
}
