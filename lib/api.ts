const BASE_URL = "https://desafio-modulo-9.vercel.app/api";
// const BASE_URL = "http://localhost:3001/api";

export async function fetchAPI(input: RequestInfo, options?: any) {
  const url = BASE_URL + input;

  const token = getSaveToken();

  const newOptions: any = options || {};

  if (newOptions.body) {
    newOptions.headers = { ["Content-Type"]: "application/json" };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  if (token) {
    // newOptions.headers = newOptions.headers || {}; lo mismo que abajo
    //si tiene un valor queda como esta y sino le agrega un objeto vacio
    newOptions.headers ||= {};
    newOptions.headers["Authorization"] = "bearer " + token;
    // newOptions.headers = { ["Content-Type"]: "application/json" };
    newOptions.headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  } else {
    return { message: "Hubo un error", status: res.status };
  }
}

// export async function auth(email: string, code: string) {
//   fetchAPI("/auth", {});
//   return true;
// }

export async function sendCode(email: string) {
  return fetchAPI("/auth", { method: "POST", body: { email } });
}

export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: { email, code },
  });
  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}

export function getSaveToken() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token");
  } else {
    false;
  }
}

export function deleteSaveToken() {
  localStorage.removeItem("auth_token");
  return true;
}

export async function fetchAPIFromServer(input: RequestInfo) {
  const url = BASE_URL + input;

  const res = await fetch(url);

  if (res.status >= 200 || res.status < 300) {
    return res.json();
  } else {
    throw { message: "Hubo un error", status: res.status };
  }
}

export function updateName(name: string, lastName: string) {
  return fetchAPI("/me", { method: "PATCH", body: { name, lastName } });
}

export function updateAddress(address: string) {
  return fetchAPI("/me/address", { method: "PATCH", body: { address } });
}
