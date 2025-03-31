const getCars = () => {
    return JSON.parse(localStorage.getItem('cars')) || [{brand:'Ford', model: 'Focus', color: 'white', year: '2025'}];
}

const getClients = () => {
    return JSON.parse(localStorage.getItem('clients')) || [];
}

/*
cars: [{
    brand,
    model,

}]
*/
