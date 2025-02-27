const ladder = {
    counter: 0,
    up: function () {
        this.counter++;
        return this;
    },
    down: function () {
        this.counter--;
        return this;
    },
    showStep: function () {
        console.log(this.counter);
        return this;
    }
};

ladder.up().up().up().down().down().showStep();
