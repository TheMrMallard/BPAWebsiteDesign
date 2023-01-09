// Create array
var carList = new Array();
var info = "";

// ---------------- Database ----------------
carList.push(
    {carId: 1, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 2, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 3, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 4, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 5, model: 'Nissan', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 6, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 7, model: 'Tesla', fuelType: "Electric", price: 52000, mileage: 5832},
);
// ---------------- Database ----------------

// ----------------- STYLING LISTS ------------------------
/* Creates a unordered list through coding
* Basically imagine this is typing the code into HTML, but I'm basically building it
* Note to John (typed by John): Add the bootstrap syntax after layout is planned
*/

function listBuilder (array) {
    let builder = ''
    builder += 
    // Basically pretend this is building HTML code
    '<ul>' + '<li>' + 'Car Id: ' + array.carId 
            + '<ul>' 
                + '<li>' + 'Model: ' + array.model + '</li>'
                + '<li>' + 'Fuel Type: ' + array.fuelType + '</li>'
                + '<li>' + 'Price: ' + array.price + '</li>'
                + '<li>' + 'Mileage: ' + array.mileage + '</li>'
            + '</ul>' 
        + '</li>' 
    + '</ul>'

    return builder;
}

// Step 1 is called when the user presses the search button 
function searchList() {
    let keyInput = document.querySelector('#searchInput').value;
    let words = keyInput.split(' ')

    /* Don't need these until I think I need them
    let formResult = ''
    formResult += searchFilter(carList, words);
    */
    
    document.querySelector('#carList').innerHTML = searchFilter(carList, words);
    document.querySelector('#carList').innerHTML += words.length;
}

// Step 2 - Filter results based on user input without case sensitivity
function searchFilter(array, keyValue) {
    let filteredForm = '';

    // Accesses objects in array
        for(w = 0; w < keyValue.length; w++) {

            for(i = 0; i < array.length; i++) {
                // Accesses values in object
                for (let value in array[i]) {
                    // Turns these values to string so it can be lowercased.
                    let arrayValue = array[i][value].toString()
                    let input = keyValue[w].toString()

                    if (input == ' ' || input == '') {
                        filteredForm = info;
                    } else if (arrayValue.toLowerCase() == input.toLowerCase()) {
                        filteredForm += listBuilder(array[i])
                    }
                }
            }

        }
    // Checks for duplicates, mentioned below
    filteredForm = checkForDuplication(filteredForm);

    return filteredForm;
}

// Step 3 - check for any duplicates (wip)
function checkForDuplication(array) {
    for (i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
            // The problem here is that I'm returning a bulleted list, not an array
        }
    }

    return array;
}

// Setup the main page showing all of the cars
carList.forEach(function(carInfo) {
    info += listBuilder(carInfo)
});

document.querySelector('#carList').innerHTML = info;

