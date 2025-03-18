'use strict'

const regExp = {
    name: /^[a-zA-Z]+$/gi,
}

const initForm = () => {
    const trigger = document.querySelector('.js-form-button');
    const formElements = document.forms.formValidation;

    trigger.addEventListener('click', () => {
        const firstname = formElements.firstname.value;
        const lastname = formElements.lastname.value;
        const email = formElements.email.value;
        const phone = formElements.phone.value;
        const city = formElements.city.value;
        const gender = formElements.gender.value;
        const languages = [];
        const message = formElements.message.value;

        for (let i = 0; i < formElements.languages.length; i++) if (formElements.languages[i].checked) languages.push(formElements.languages[i].value);

        if (firstname.match(regExp.name)) console.log(true);
        if (lastname.match(regExp.name)) console.log(true);
        else console.log(false);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initForm();
})
