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
    // Basically building HTML code with Bootstrap

    `<div class="card m-5 mb-0 p-4"> 
        <div class="row"> 
            <div class="col-md-4"> 
                <div class="card-body"> 
                    <h5 class="cardtitle"> ${array.model} </h5> 
                    <ul>
                        <li> Fuel Type: ${array.fuelType} </li>
                        <li> Price: ${array.price} </li>
                        <li> Mileage: ${array.mileage} </li>
                        <li> Color: ${array.exteriorColor} </li>
                    </ul> 

                    <a href="${array.link}" target="_blank">
                        <button class="m-2 btn btn-primary" type="button" aria-haspopup="true" aria-expanded="false">
                            More Info
                        </button>
                    </a>

                    <br>
                    Car Id: ${array.carId} (shown for showcase purposes)
                </div> 
            </div> 

            <div class="col-md-8"> 
                <img class="img-thumbnail img-fluid" src="${array.img}" alt="${array.alt}">
            </div> 
        </div> 
    </div>`

    return builder;
}

// Step 1 is called when the user presses the search button 
function searchList() {
    let keyInput = document.querySelector('#searchInput').value;
    let words = keyInput.split(' ')
    
    document.querySelector('#carList').innerHTML = searchFilter(carList, words);
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
    let sortingScore = sortList(array, arrayScore)
    let score = Math.max(...arrayScore)
    
    // Once the sorting iterations are done, check if there is a sort by used and process them in website
    if (sortBy == 0) {
        for (i = score; i > 0; i--) {
            for (j = 0; j < array.length; j++) {
                // Access object points  
                if (arrayScore[j] == i) {
                    filteredForm += carInfoBuilder(array[j])
                }
            }
        }

    } else {
        for (i = 0; i < sortingScore.length; i++) {
            // Access object points
            let position = sortingScore[i][1]
            filteredForm += carInfoBuilder(array[position])
        }
    }

    // Returns final product
    return filteredForm;
}

// Setup the main page showing all of the cars
carList.forEach(function(carInfo) {
    info += carInfoBuilder(carInfo)
});

document.querySelector('#carList').innerHTML = info;

