const title = document.querySelector(".title"); // getting title and button
const submitBtn = document.getElementById("submit");

const fullNameGroup = document.querySelector(".fullNameGroup"); 
const fullNameInput = document.getElementById("fullNameInput");
const usernameInput = document.getElementById("usernameInput");  // getting all textboxs for the user input
const passwordInput = document.getElementById("passwordInput");

const loginSection = document.getElementById("login");  // getting the buttons to check which is currently showing
const signUpSection = document.getElementById("signUp");

const loginBtn = loginSection.querySelector("button"); // checking which is displayed
const signUpBtn = signUpSection.querySelector("button"); 

const accounts = {};
let mode = "login"; // sets mode to whatever button is showing

signUpBtn.addEventListener("click", () => {
    mode = "signup";
    title.textContent = "Sign Up";
    fullNameGroup.style.display = "flex"; 
    signUpSection.style.display = "none"; // sets the sign up text box, login button to display and hides the sign up button
    loginSection.style.display = "block"; 
});

loginBtn.addEventListener("click", () => {
    mode = "login";
    title.textContent = "Login";
    fullNameGroup.style.display = "none";
    loginSection.style.display = "none"; //sets the sign up text box, login button to hide and displays the sign up button
    signUpSection.style.display = "block";
});

submitBtn.addEventListener("click", () => {
    const fullName = fullNameInput.value.trim();
    const username = usernameInput.value.trim(); // gets user inputs wehn submit is clicked
    const password = passwordInput.value.trim();


    if(!username || !password || (mode === "signup" && !fullName)){ 
        alert("Please fill out all required fields"); // checks that all inputs are filled
        return;
    }

    if(mode === "signup"){
        if(accounts[username]){
            alert("That username already exists"); //checks if username already exsit
            return; 
        }

        accounts[username] = { fullName, password };
        alert("Account created successfully"); // makes account and clears input
        loginBtn.click();
        clearInputs();
    } 
    
    else if(mode === "login"){
        if(!accounts[username] || accounts[username].password !== password){
            alert("Invalid username or password"); // checks if username and password match if not tells user
            return;
        }

        alert(`Welcome back, ${(accounts[username].fullName || username)}, enjoy my portfolio`);
        clearInputs(); // logs in user and greets
        window.location.href = "index.html" // takes the user to my portfolio
    }
});

function clearInputs(){
    fullNameInput.value = "";
    usernameInput.value = ""; // clears inputs for next account
    passwordInput.value = "";
}


