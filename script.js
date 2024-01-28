// Get references to the login and sign-up forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const signUpContainer = document.querySelector(".sign-up-container");

// Get references to the login and sign-up links
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");

const signUpBtn = document.getElementById("sign-up-btn");

// Function to toggle between login and sign-up forms
function toggleForms(fromForm, toForm) {
	// Show the form to be displayed
	toForm.style.opacity = "1";
	toForm.style.transform = "translateX(0)";
	toForm.style.display = "block";

	// Hide the other form
	fromForm.style.opacity = "0";
	fromForm.style.transform = "translateX(-100%)";
	fromForm.style.display = "none";

	// Remove the login-display class from the login container
	fromForm.parentElement.classList.remove("login-display");

	// Add the login-display class to the login container
	toForm.parentElement.classList.add("login-display");

	// Wait for the animation to finish before hiding the other form
	setTimeout(() => {
		fromForm.style.display = "none";
	}, 500); // Adjust this delay to match the animation duration
}

// Add event listeners to the links
signupLink.addEventListener("click", function (event) {
	event.preventDefault();
	// Hide login form and show sign-up form
	signUpContainer.style.display = "block";
	toggleForms(loginForm, signupForm);
});

loginLink.addEventListener("click", function (event) {
	event.preventDefault();
	// Hide sign-up form and show login form
	signUpContainer.style.display = "none";
	toggleForms(signupForm, loginForm);
});

// signUpBtn.addEventListener("click" , function(event){
// 	event.preventDefault();
// 	// Hide sign-up form and show login form
// 	signUpContainer.style.display = "none";
// 	toggleForms(signupForm, loginForm);
// });
