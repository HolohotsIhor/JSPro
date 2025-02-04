const h1Element = document.querySelector("h1");
const buttonElement = document.getElementById("btn");
let isTextVisible = true;

const hideH1 = () => {
    h1Element.style.visibility = isTextVisible ? 'hidden' : 'visible';
    buttonElement.textContent = isTextVisible ? 'Hide of text' : 'Show of text';
    isTextVisible = !isTextVisible;
}
