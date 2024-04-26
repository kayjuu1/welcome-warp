// navbar
const loginBtn = document.querySelector(".loginBtn");
const signUpBtn = document.querySelector(".signUpBtn");

loginBtn.addEventListener("click", () => {
    window.location.href = "loginPage.html";
});

signUpBtn.addEventListener("click", () => {
    window.location.href = "loginPage.html";
});

// loginPage
const emailInput = document.querySelector('#floatingInput');
const password = document.querySelector('#floatingPassword');
const login = document.querySelector("#loginBtn");
const msg = document.querySelector('.msg');

login.addEventListener("click", function(e) {
    e.preventDefault();
    if (emailInput.value === "" || password.value === "") {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';
    } else {
        alert("Success");
    }
});
console.log(emailInput.value, password.value)