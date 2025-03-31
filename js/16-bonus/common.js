const serviceMode = {
    cars: {
        title: 'Cars',
        callback: () => createCarsInterface()
    },
    clients: {
        title: 'Clients',
        callback: () => {console.log('clients')}
    }
}

const generateNavigation = () => {
    const parent = document.querySelector('.nav');
    const list = document.createElement('ul');

    for (let mode in serviceMode) {
        const item = document.createElement('li');

        item.setAttribute('data-mode', mode);
        item.textContent = serviceMode[mode].title;
        item.addEventListener('click', serviceMode[mode].callback);

        list.appendChild(item);
    }

    parent.appendChild(list);
}
