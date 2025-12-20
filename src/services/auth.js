export function login(email, password) {
  
  if (email === "admin@phantom.com" && password === "123456") {
    localStorage.setItem("phantom-auth", "true");
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem("phantom-auth");
}

export function isAuthenticated() {
  return localStorage.getItem("phantom-auth") === "true";
}
