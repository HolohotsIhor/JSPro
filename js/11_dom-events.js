const el = document.getElementById('special');
const button = document.getElementById('btn');

el.innerHTML = 'You bro!';
el.style.backgroundColor = 'grey';
el.classList.add('styled');
el.classList.toggle('abracadabra');

const items = document.querySelectorAll('.hillel');
console.log(items);

// button.addEventListener('click', event => {
//     console.log(event.target.value);
//     event.target.classList.toggle('js-coral');
// })

document.querySelector('a').addEventListener('click', event => {
    event.preventDefault(); // Stop default
    console.log(event.target);
})

const users = [{id: 1, name: 'Ihor'}, {id: 2, name: 'Ihor2'}];
document.querySelector('button.create').addEventListener('click', () => {
    const parent = document.querySelector('.user-list');

    users.forEach(user => {
        const userLi = document.createElement('li');
        userLi.textContent = user.name;
        userLi.setAttribute('data-id', user.id);

        parent.appendChild(userLi);
    })

    // event delegation
    parent.addEventListener('click', event => {
        const id = event.target.getAttribute('data-id');
        const myUser = users.find(user => user.id == id);
        console.log(myUser);
    })
})

/*
    <div>user</div>
    <div>admin</div>
    <div>student</div>
*/
