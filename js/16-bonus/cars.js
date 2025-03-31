const createCarsInterface = () => {
    const data = getCars();
    const parent = document.querySelector('.wrapper');
    const gridEl = document.createElement('div');
    gridEl.classList.add('grid');

    generateGridHead(gridEl);
    generateGridContent(gridEl, data);

    parent.appendChild(gridEl);

}

function generateGridHead(parent) {
    parent.innerHTML = `
        <div class='grid'>
            <div>Brand</div>
            <div>Model</div>
            <div>Color</div>
            <div>Year</div>
            <div>Options</div>
        </div>
    `
}

function generateGridContent(parent, cars) {
    for (let car of cars) {
        const row = `
            <div class='row'>
                <div>${car.brand}</div>
                <div>${car.model}</div>
                <div>${car.color}</div>
                <div>${car.year}</div>
                <div data-id="${car.id}">
                    <button data-action="view">View</button>
                    <button data-action="edit">Edit</button>
                    <button data-action="delete">Delete</button>
                </div>
            </div>
        `
    }
}
