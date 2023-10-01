
const API_DOMAIN = 'http://localhost:3002/';

export async function get(path) {
   return (await fetch(API_DOMAIN + path)).json();            
}

export async function post(path, option) {
   const res = await fetch(API_DOMAIN + path, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
         },
         body: JSON.stringify(option)
   })
   return await res.json();
}

export async function del(path) {
   const res = await fetch(API_DOMAIN + path, {
      method: "DELETE"
   })
   return await res.json();
}

export async function patch(path, option) {
   const res = await fetch(API_DOMAIN + path, {
         method: "PATCH",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
         },
         body: JSON.stringify(option)
      })
   return await res.json();
}