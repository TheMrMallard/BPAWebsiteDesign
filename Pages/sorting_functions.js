let sortBy = 0;

function setSort(number) {
    sortBy = number;
}

function sortValues(array, arrayScore, keyValue, beReversed) {
    // Setup array
    let valueAndPosition = new Array(arrayScore.length)
    let hasDuplicates = false;
    let reverse = beReversed;

    for(i = 0; i < valueAndPosition.length; i++) {
        valueAndPosition[i] = new Array(2)
    }

   
    // Save price and index position
    for(i = 0; i < valueAndPosition.length; i++) {
        if (countDuplicates(arrayScore, i) != 0) {
            for(j = 0; j < valueAndPosition[i].length; j++) {
                if(j == 0) {
                    valueAndPosition[i][j] = array[j].price;
                } else {
                    valueAndPosition[i][j] = i;
                }
            }
        }
    }

    if (reverse) {
        valueAndPosition.sort((a, b) => (b[0] - a[0] || (b[1] - a[1])))
    } else {
        valueAndPosition.sort((a, b) => (a[0] - b[0] || (a[1] - b[1])))
    }
    

    return valueAndPosition;
}

function sortList(array, arrayScore) {
    let hasDuplicates = false;
    let result = []

    switch(sortBy) {
        case 0: // default
            result = arrayScore;
        break;

        case 1: // price (high to low)
            let priceAndPosition = sortValues(array, arrayScore, 'price', true)

            result += priceAndPosition;
            
            /*
            for(i = 0; i < highestScore.length; i++) {
                if(countDuplicates(arrayScore, i) > 0) {
                    // Find duplicates and iterate the whole array starting from i and add points up to the highestScore
                    // Find highest price in current iteration then add (countDuplicates - 1) to the current value and the scores higher than i, then find second highest 
                    for(j = 0; arrayScore.length; j++) {
                        let priceArray = [];

                        // Find if whether if the value is equal to i 
                        if(arrayScore[j] == i) {
                            priceArray[j] = array[j].price
                            
                            
                        } 

                    }
                }
            }
            */
            
        break;
        
        case 2: // price (low to high)

        break;

        case 3: // name (a to z)

        break;
            
    }

    return result;
}

function countDuplicates(array, key) {
    array.filter((value) => {return value === key})
}
function priceHightoLow(array, arrayScore) {

}
