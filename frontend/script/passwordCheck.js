let divPassword = document.querySelector("#passwordCheck");
let signUp = document.querySelector("#signUp");


let passwordLength = document.querySelector("#passwordLength");
let passwordSpecial = document.querySelector("#passwordSpecial");
let passwordNumber = document.querySelector("#passwordNumber");

let password = document.querySelector("#password");

let check = {
    length: 0,
    numbers: 0,
    special: 0
};



let checkLength = (password) => {
    if(password.value.length < 8)
        return false;

    check.length = 1;
    return true;
}

let checkNumbers = (password) => {
    let regexNumbers = new RegExp("([0-9])");
    if(!regexNumbers.test(password.value))
        return false;

    check.numbers = 1;
    return true;
}

let checkSpecial = (password) => {
    let regexSpecial = new RegExp("[$&+,:;=?@#|'<>.^*()%!-]");
    if(!regexSpecial.test(password.value))
        return false;

    check.special = 1;
    return true;
}


let changeText = (div, password) => {
    div.style.display = 'block';
    password.style.color = 'red';
    password.style.textDecoration = "none";

    return 0;
};

let changeTextV2 = (password) => {
    password.style.textDecoration = 'line-through';
    password.style.color = 'green';
    return 1;
}


signUp.addEventListener("click", () => {
    if(!checkLength(password))
        check.length = changeText(divPassword, passwordLength);
    else
        check.length = changeTextV2(passwordLength);
    
    if(!checkNumbers(password))
        check.numbers = changeText(divPassword, passwordNumber);
    else 
        check.numbers = changeTextV2(passwordNumber);

    if(!checkSpecial(password)) 
        check.special = changeText(divPassword, passwordSpecial);
    else 
        check.special = changeTextV2(passwordSpecial);


    if(check.special && check.numbers && check.length)
        divPassword.style.display = 'none';

    
})
