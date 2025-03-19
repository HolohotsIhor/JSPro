'use strict'

const regExp = {
    name: /^[a-z]{2,}$/i,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?380\d{9}$/,
}
let isValid = true;

const removeErrors = (items) => {
    items.length > 0 &&
        items.forEach(item => {
            item.remove();
        })
}

const setError = (parentId) => {
    const errorEl = document.createElement('div');
    const parent = document.querySelector(`#${parentId}`);

    errorEl.classList.add('error-message');
    errorEl.innerText = "Please input correct data";

    isValid = false;
    parent.appendChild(errorEl);
}

const showValidData = (form, data) => {
    form.remove();
    document.body.innerHTML = JSON.stringify(data, null, 2);
}

const initForm = () => {
    const trigger = document.querySelector('.js-form-button');
    const formElements = document.forms.formValidation;
    const form = document.querySelector('#formValidation');

    trigger.addEventListener('click', () => {
        const firstname = formElements.firstname.value;
        const lastname = formElements.lastname.value;
        const email = formElements.email.value;
        const phone = formElements.phone.value;
        const city = formElements.city.value;
        const gender = formElements.gender.value;
        const languages = [];
        const message = formElements.message.value;
        let formData = {}

        isValid = true;
        removeErrors(document.querySelectorAll('.error-message'));

        for (let i = 0; i < formElements.languages.length; i++) if (formElements.languages[i].checked) languages.push(formElements.languages[i].value);

        firstname.match(regExp.name) ? formData = { ...formData, firstname } : setError('firstname-parent');
        lastname.match(regExp.name) ? formData = { ...formData, lastname } : setError('lastname-parent');
        email.match(regExp.email) ? formData = { ...formData, email } : setError('email-parent');
        phone.match(regExp.phone) ? formData = { ...formData, phone } : setError('phone-parent');
        city !== '-1' ? formData = { ...formData, city } : setError('city-parent');
        gender ? formData = { ...formData, gender } : setError('gender-parent');
        languages.length > 0 ? formData = { ...formData, languages } : setError('languages-parent');
        message ? formData = { ...formData, message } : setError('message-parent');

        isValid ? showValidData(form, formData) : console.log('false valid');
    })
}

document.addEventListener('DOMContentLoaded', () => {
    initForm();
})
