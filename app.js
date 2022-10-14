// I have taken help from youtube to make this project

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
console.log(password);
console.log(confirmPass);

let result = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validation();
  if (result) {
    console.log("done");
    alert("You have been successfully validated ");
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validation = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPassValue = confirmPass.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
    result = false;
  } else {
    setSuccess(username);
    result = true;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    result = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    result = false;
  } else {
    setSuccess(email);
    result = true;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    result = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
    result = false;
  } else {
    setSuccess(password);
    result = true;
  }

  if (confirmPassValue === "") {
    setError(confirmPass, "Please confirm your password");
    result = false;
  } else if (confirmPassValue !== passwordValue) {
    setError(confirmPass, "Passwords doesn't match");
    result = false;
  } else {
    setSuccess(confirmPass);
    result = true;
  }
};
