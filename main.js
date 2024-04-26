// loginPage

const login = document.querySelector("#loginBtn");
login.addEventListener("click", function(e) {
    e.preventDefault();

    const emailInput = document.querySelector('#floatingInput');
    const password = document.querySelector('#floatingPassword');

    const msg = document.querySelector('.msg');

    if (emailInput.value === "" || password.value === "") {
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';
        msg.style.color = 'red';
    } else {
        msg.classList.remove('error');
        msg.innerHTML = '';
        alert("Success");
    }
});
