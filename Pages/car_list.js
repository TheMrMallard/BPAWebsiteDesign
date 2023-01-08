// Create array
var carList = new Array();
var info = "";

// ---------------- Database ----------------
carList.push(
    {carId: 1, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 2, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
);
// ---------------- Database ----------------

// Called when the user presses the search button (still testing)
function searchList() {
    document.querySelector('#carList').innerHTML += 1;
}

// For statement
carList.forEach(function(carInfo) {
    /*
    * Basically imagine this is typing the code into HTML, but I'm basically building it
    * Note to John (typed by John): Add the bootstrap syntax after layout is planned
    */
    info += 
    '<ul>' + '<li>' + 'Car Id: ' + carInfo.carId 
            + '<ul>' 
                + '<li>' + 'Model: ' + carInfo.model + '</li>'
                + '<li>' + 'Fuel Type: ' + carInfo.fuelType + '</li>'
                + '<li>' + 'Price: ' + carInfo.price + '</li>'
                + '<li>' + 'Mileage: ' + carInfo.mileage + '</li>'
            + '</ul>' 
        + '</li>' 
    + '</ul>'
});

document.querySelector('#carList').innerHTML = info;

