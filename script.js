
const email = document.querySelector('#email');
const errorimg = document.querySelector('.error-img');
const errortext = document.querySelector('.error-text');
const heroimg = document.querySelector("#heroimg");
const regx = /^[a-z0-9_.+]+@[a-z]+[.][a-z]+$/i;




function validateEmail() {
    if (regx.test(email.value) === false) {
        // email.style.outline = 'red';
        email.style.border = '2px solid red';
        errorimg.style.display = 'block';
        errortext.style.display = 'block';
    }
    else {
        email.style.border = '1px solid hsl(0, 36%, 70%)';
        errorimg.style.display = 'none';
        errortext.style.display = 'none';
    }
}
