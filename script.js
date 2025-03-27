// Login Function
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        document.getElementById("error-message").innerText = error.message;
    });
}

// Signup Function
function signup() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        document.getElementById("signup-error-message").innerText = error.message;
    });
}

// Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.log(error.message);
    });
}

// Check if user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user && window.location.pathname.includes("dashboard.html")) {
        window.location.href = "index.html";
    }
});
