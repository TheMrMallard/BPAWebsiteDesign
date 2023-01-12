// ---------------- VARIABLES ----------------
var info = "";

// ----------------- STYLING LISTS ------------------------
/* Creates a unordered list through coding
* Basically imagine this is typing the code into HTML, but I'm basically building it
* Note to John (typed by John): Add the bootstrap syntax after layout is planned
*/

// Builds a profile of a car
function carInfoBuilder(array) {
    let builder = ''
    builder += 
    // Basically pretend this is building HTML code
    '<ul>' + '<li>' + 'Car Id: ' + array.carId 
            + '<ul>' 
                + '<li>' + 'Model: ' + array.model + '</li>'
                + '<li>' + 'Fuel Type: ' + array.fuelType + '</li>'
                + '<li>' + 'Price: ' + array.price + '</li>'
                + '<li>' + 'Mileage: ' + array.mileage + '</li>'

                + '<li>' + 'Color: ' + array.exteriorColor + '</li>'
            + '</ul>' 
        + '</li>' 
    + '</ul>'

    return builder;
}

// Step 1 is called when the user presses the search button 
function searchList() {
    let keyInput = document.querySelector('#searchInput').value;
    let words = keyInput.split(' ')
    
    document.querySelector('#carList').innerHTML = searchFilter(carList, words);
    document.querySelector('#carList').innerHTML += words.length;
    // document.querySelector('#carList').innerHTML += words.length;
}

// Step 2 - Filter results based on user input without case sensitivity
function searchFilter(array, keyValues) {
    let emptyScore = 0;
    let arrayScore = []
    let filteredForm = '';
    

    // Checks if the user did not type anything (including just spaces), it will restore to its default
    for(i = 0; i < keyValues.length; i++) {
        if (keyValues[i] != '') {emptyScore += 1}
    }
    if (emptyScore == 0) {return info}

    // Sets the needed amount of indexes to start the algorithm
    for(i = 0; i < array.length; i++) {
        arrayScore[i] = 0;
    }

    // Iterate through each word, and add one point to each word matched in each of the objects
    for(w = 0; w < keyValues.length; w++) {
        
        // Access each value in each object
        for(i = 0; i < array.length; i++) {

            for (let value in array[i]) {
                // Will split up words from the value in each object
                let arrayValue = array[i][value].toString()
                let valueWords = arrayValue.split(' ')

                let input = keyValues[w].toString()

                // The word will iterate through each word in the input
                for(j = 0; j < valueWords.length; j++) {
                    // If values match, add one point to the object
                    if (valueWords[j].toLowerCase() == input.toLowerCase()) {
                        arrayScore[i] += 1
                    }
                }
            }
        }
    }

    // I want to add an algorithm here that further sorts the cars through a dropdown bar, eg price or name, etc

    let sortingScore = sortMethods(array, arrayScore)

    // Once the iterations are done, find the largest number in the array then go down from there. Objects with zero points will not appear

    let score = Math.max(...arrayScore)
    
    for (i = score; i > 0; i--) {
        for (j = 0; j < array.length; j++) {
            // Access object points  
            if (arrayScore[j] == i) {
                filteredForm += carInfoBuilder(array[j])
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
    info += carInfoBuilder(carInfo)
});

document.querySelector('#carList').innerHTML = info;

