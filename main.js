const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConf = document.getElementById("password-confirmation");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const zipcodeValue = zipcode.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfValue = passwordConf.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (zipcodeValue === "") {
    setErrorFor(zipcode, "ZIP Code cannot be blank");
  } else if (/^[0-9]*$/.test(zipcodeValue)) {
    setSuccessFor(zipcode);
  } else {
    setErrorFor(zipcode, "ZIP Code must be a number");
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfValue === "") {
    setErrorFor(passwordConf, "Confirm your password");
  } else if (passwordValue !== passwordConfValue) {
    setErrorFor(passwordConf, "Passwords does not match");
  } else {
    setSuccessFor(passwordConf);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerHTML = `${message} <i class="fas fa-exclamation-circle"></i>`;
  formGroup.classList.add("error");
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerHTML = `<i class="fas fa-check-circle"></i>`;
  formGroup.classList.add("success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const inputs = form.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('focus', () => input.previousSibling.innerHTML = ''));
