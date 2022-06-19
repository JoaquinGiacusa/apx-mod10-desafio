export {};

export async function fetchAPI(input: any, options: any) {
  return fetch(input, options).then((res) => res.json());
}

export async function sendCode(email: string) {
  fetchAPI("/auth", {});
  return true;
}

export async function auth(email: string, code: string) {
  fetchAPI("/auth", {});
  return true;
}
