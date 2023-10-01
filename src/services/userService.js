import { get, post } from "../utils/request";

export async function getUser(email = "", password = "") {
   let pass = "";
   if (password !== "")
      pass = `&password=` + password;
   return await get(`users?email=${email}` + pass);
}


export async function createUser(option) {
   return await post(`users`, option);
}
