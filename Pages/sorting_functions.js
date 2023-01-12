let sortBy = 0;

function setSort(number) {
    sortBy = number;
}

function sortMethods(array, arrayScore) {
    let priceAndPosition = [arrayScore.length][arrayScore.length];
    let result = [];    
    let highestScore = Math.max(...arrayScore)
    let points = 0;

    switch(sortBy) {
        case 0: // default
                
        break;

        case 1: // price (high to low)
            // Save price and index position
            for(i = 0; i < array.length; i++) {
                for(j = 0; j < priceAndPosition[i].length; j++) {
                    if(j == 0) {
                        priceAndPosition[i][j] = array[i].price;
                    } else {
                        priceAndPosition[i][j] = i;
                    }
                }
            }

            // Sort array based on price
            priceAndPosition.sort((a, b) => (b[0] - a[0] || (b[1] - a[1])))

            document.querySelector('#carList').innerHTML += priceAndPosition;
            



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
