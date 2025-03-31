// Object prototype
const genericTranslations = {
    TITLE: 'My site',
    MENU: ['Menu 1', 'Menu 2', 'Menu3'],
};

// Object.create
const uaTranslations = Object.create(genericTranslations);
uaTranslations.TITLE = 'Мій сайт'

console.log(uaTranslations);


// Object.setPrototypeOf
const parent = { inherit: true };
const childA = {};

Object.setPrototypeOf(childA, parent);
console.log(childA.inherit)

// Object.hasOwnProperty
function Human() {
    this.getInfo = function() {
        console.log('info');
    }
}

const alex = new Human();
console.log('Own')
console.log(alex.hasOwnProperty('getInfo'))
