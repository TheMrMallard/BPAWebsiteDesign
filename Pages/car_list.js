// Create array
var carList = new Array();
var info = "";

// ---------------- Database ----------------
carList.push(
    {carId: 1, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 2, model: 'Chevron', fuelType: "Gasoline", price: 5200, mileage: 5832},
    {carId: 3, model: 'Ford', fuelType: "Gasoline", price: 1000, mileage: 12421},
    {carId: 4, model: 'Chevron', fuelType: "Electric", price: 5200, mileage: 5832},
    {carId: 5, model: 'Nissan', fuelType: "Electric", price: 1000, mileage: 12421},
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
    
    document.querySelector('#carList').innerHTML = newSearchFilter(carList, words);
    document.querySelector('#carList').innerHTML += words.length;
}

// Step 2 - Filter results based on user input without case sensitivity

/* I think you can make a recursive function for this so that high priority 
* results go on first, then remove one word, then second-most and so on... 
* not important right now this is already good.
*/

function newSearchFilter(array, keyValues) {
    let filteredForm = '';
    let arrayScore = []

    // Checks if the user did not type anything, it will restore to its default
    if (keyValues[0] == '') {return info}

    // Sets the needed amount of indexes to start the algorithm
    for(i = 0; i < array.length; i++) {
        arrayScore[i] = 0;
    }

    // Iterate through each word, and add one point to each word matched in each of the objects
    for(w = 0; w < keyValues.length; w++) {
        
        // Acess each value in each object
        for(i = 0; i < array.length; i++) {
            for (let value in array[i]) {
                let arrayValue = array[i][value].toString()
                let input = keyValues[w].toString()

                // If values match, add one point to the object
                if (arrayValue.toLowerCase() == input.toLowerCase()) {
                    arrayScore[i] += 1
                }
            }
        }
    }

    // I want to add an algorithm here that further sorts the cars through a dropdown bar, eg price or name, etc
    
    // Once the iterations are done, find the largest point (largest is the length of keyValue) then go down from there. Objects with zero points will not appear
    for(i = keyValues.length; i > 0; i--) {
        // Access object points
        for(j = 0; j < array.length; j++) {
            if (arrayScore[j] == i) {
                filteredForm += listBuilder(array[j])
            }
        }
    }

    return filteredForm;
}


// Step 3 - check for any duplicates (wip)
function checkForDuplication(array) {
    for (i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
            array.splice(i, i-1);
        }
    }

    return array;
}

// Setup the main page showing all of the cars
carList.forEach(function(carInfo) {
    info += listBuilder(carInfo)
});

document.querySelector('#carList').innerHTML = info;

