const signInFormContainer = document.querySelector(".sign-in__form-container");
const signUpFormContainer = document.querySelector(".sign-up__form-container");
const signUpLink = document.querySelector(".sign-up__link");
const signInLink = document.querySelector(".sign-in__link");

signUpLink.addEventListener("click", () => {
  signInFormContainer.style.display = "none";
  signUpFormContainer.style.display = "block";
});

signInLink.addEventListener("click", () => {
  signInFormContainer.style.display = "block";
  signUpFormContainer.style.display = "none";
});
