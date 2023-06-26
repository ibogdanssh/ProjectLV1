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




signUp.addEventListener("click", () => {
    if(!checkLength(password)) {
        divPassword.style.display = "block";
        passwordLength.style.textDecoration = "none";
        passwordLength.style.color = 'red';
        check.length = 0;
        
    }
    else{
        passwordLength.style.textDecoration = 'line-through';
        passwordLength.style.color = 'green';
        check.length = 1;
    }
    
    if(!checkNumbers(password)) {
        divPassword.style.display = "block";
        passwordNumber.style.textDecoration = 'none';
        passwordNumber.style.color = 'red';
        check.numbers = 0;
    }
    else {
        passwordNumber.style.textDecoration = 'line-through';
        passwordNumber.style.color = 'green';
        check.numbers = 1;
    }
    if(!checkSpecial(password)) {
        divPassword.style.display = "block";
        passwordSpecial.style.textDecoration = 'none';
        passwordSpecial.style.color = 'red';
        check.special = 0;
    }
    else {
        passwordSpecial.style.textDecoration = 'line-through';
        passwordSpecial.style.color = 'green';
        check.special = 1;
    }


    if(check.special && check.numbers && check.length)
        divPassword.style.display = 'none';
    
})
