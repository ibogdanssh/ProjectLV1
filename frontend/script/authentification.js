let eyeOpen = document.querySelector("#enterPass");
let eyeOpenRepeat = document.querySelector("#repeatPass");

let typePass = document.querySelector("#password");
let againPass = document.querySelector("#againPassword")

let mainForm = document.querySelector("#mainForm");

let itsOpen = true;
let itsOpenRepeat = true;

let regexString = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

eyeOpen.addEventListener('click', () => {
    if(itsOpen) {
        eyeOpen.src = "../img/eye.png";
        itsOpen = false;
        typePass.type = "text";
    }
    else {
        eyeOpen.src = "../img/hidden.png";
        itsOpen = true;
        typePass.type = "password";
    }
})


eyeOpenRepeat.addEventListener('click', () => {
    if(itsOpenRepeat) {
        eyeOpenRepeat.src = "../img/eye.png";
        itsOpenRepeat = false;
        againPassword.type = "text";
    }
    else {
        eyeOpenRepeat.src = "../img/hidden.png";
        itsOpenRepeat = true;
        againPassword.type = "password";
    }
})

mainForm.addEventListener("submit", () => {
    
})