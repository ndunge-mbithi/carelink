const API = "http://localhost:3000";

function login() {
  fetch(API + "/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("user", username.value);
      window.location = "dashboard.html";
    } else {
      status.innerText = "Login failed";
    }
  });
}