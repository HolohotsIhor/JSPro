// Polimorfizm
function Animal() {
    this.voice = function() {
        console.log('...');
    }
}

function Lion() {
    this.voice = function() {
        console.log('arrr');
    }
}
Lion.prototype = new Animal();

function zooSimular(animal: Animal) {
    animal.voice();
}
