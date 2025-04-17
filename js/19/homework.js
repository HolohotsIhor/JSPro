'use strict'

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=49.0625&lon=33.4048&appid=81b7484af2cf3817281487b6500731fa';
const essences = {
    characters: {
        name: 'characters',
        root: document.querySelector('#characters-grid'),
        url: 'https://www.swapi.tech/api/people',
        trigger: document.querySelector('.js-load-characters'),
    },
    planets: {
        name: 'planets',
        root: document.querySelector('#planets-grid'),
        url: 'https://www.swapi.tech/api/planets',
        trigger: document.querySelector('.js-load-planets'),
    },
    vehicles: {
        name: 'vehicle',
        root: document.querySelector('#vehicles-grid'),
        url: 'https://www.swapi.tech/api/vehicles',
        trigger: document.querySelector('.js-load-vehicles'),
    },
}

const showWeather = (data) => {
    const country = document.querySelector('#country');
    const location = document.querySelector('#location');
    const wind = document.querySelector('#wind');
    const temp = document.querySelector('#temp');

    country.innerHTML = `Country: ${data.sys.country}`;
    location.innerHTML = `Location: ${data.name}`;
    wind.innerHTML = `Wind speed: ${data.wind.speed}`;
    temp.innerHTML = `Temp: ${data.main.temp - 273.15}`;
}

const hideLoader = (root) => {
    const loader = root.querySelector('.loader');
    loader && loader.remove();
}

const showEssence = ({ results, next }, root) => {
    results.forEach(item => {
        const el = document.createElement('div');
        el.classList.add('card');
        el.innerHTML = `${item.name}`;
        root.appendChild(el);
    })

    const type= root.getAttribute('data-type');

    // Change URLs
    // Or remove the button if there's no more data
    next ? essences[type].url = next : essences[type].trigger.remove();
    hideLoader(root);
}

const requestData = async (url, render, root = null) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        render(result, root && root);
    } catch (error) {
        console.error(`Ошибка при загрузке данных с ${url}:`, error);
        if (root) {
            hideLoader(root);
            const errMsg = document.createElement('div');
            errMsg.classList.add('card');
            errMsg.style.color = 'red';
            errMsg.textContent = 'Помилка завантаження даних';
            root.appendChild(errMsg);
        }
    }
}

const initTrigger = () => {
    essences.characters.trigger.addEventListener('click', () => requestData(essences.characters.url, showEssence, essences.characters.root))
    essences.planets.trigger.addEventListener('click', () => requestData(essences.planets.url, showEssence, essences.planets.root))
    essences.vehicles.trigger.addEventListener('click', () => requestData(essences.vehicles.url, showEssence, essences.vehicles.root))
}

document.addEventListener('DOMContentLoaded', () => {
    requestData(weatherUrl, showWeather);
    requestData(essences.characters.url, showEssence, essences.characters.root);
    requestData(essences.planets.url, showEssence, essences.planets.root);
    requestData(essences.vehicles.url, showEssence, essences.vehicles.root);
    initTrigger();
});
