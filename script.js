// ======================
// LOGIN FUNCTIONALITY
// ======================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Login attempt:", username, password);

    // Demo credentials (for prototype)
    if (username === "admin" && password === "1234") {
      localStorage.setItem("user", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials. Try admin / 1234");
    }
  });
}

// ======================
// SESSION CHECK (PROTECT PAGES)
// ======================
const userDisplay = document.getElementById("userDisplay");

if (userDisplay) {
  const user = localStorage.getItem("user");

  if (!user) {
    // Redirect if not logged in
    window.location.href = "index.html";
  } else {
    userDisplay.textContent = user;
  }
}

// ======================
// LOGOUT FUNCTION
// ======================
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// ======================
// SAVE PATIENT DATA
// ======================
const patientForm = document.getElementById("patientForm");

if (patientForm) {
  patientForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !age) {
      alert("Please fill in all fields");
      return;
    }

    const patient = {
      name: name,
      age: age,
      date: new Date().toLocaleDateString()
    };

    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    console.log("Saved patient:", patient);

    // Redirect to patient list
    window.location.href = "patients.html";
  });
}

// ======================
// LOAD PATIENT LIST
// ======================
const patientList = document.getElementById("patientList");

if (patientList) {
  const patients = JSON.parse(localStorage.getItem("patients")) || [];

  if (patients.length === 0) {
    patientList.innerHTML = "<p>No patient records yet.</p>";
  } else {
    patients.forEach((p, index) => {
      const li = document.createElement("li");
      li.textContent = `${p.name} (Age: ${p.age}) - ${p.date}`;
      li.style.marginBottom = "10px";
      patientList.appendChild(li);
    });
  }
}

// ======================
// NAVIGATION FUNCTIONS
// ======================
function goBack() {
  window.location.href = "dashboard.html";
}

// ======================
// OPTIONAL: AUTO LOGOUT (INACTIVITY)
// ======================
let timeout;

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    alert("Session expired. Logging out...");
    logout();
  }, 10 * 60 * 1000); // 10 minutes
}

// Track activity
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;