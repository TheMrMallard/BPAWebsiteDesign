var sortBy = 0;

function setSort(number) {
    sortBy = number;
}

function sortValues(array, arrayScore, keyValue, beReversed) {
    // Setup valueAndPosition array
    let valueScorePosition = new Array(arrayScore.length)

    for(i = 0; i < valueScorePosition.length; i++) {
        valueScorePosition[i] = new Array(3)
    }

    // Setup other variables
    let reverse = beReversed;
    let highest = Math.max(...arrayScore)
   
    // Iterate through and make valueScorePosition array
    for(i = 0; i < valueScorePosition.length; i++) {
        for(j = 0; j < valueScorePosition[i].length; j++) {
            if(j == 0) {
                // Set value
                valueScorePosition[i][j] = array[i][keyValue];
            } else if (j == 1) {
                // Set position
                valueScorePosition[i][j] = i
            } else {
                // Set arrayScore
                valueScorePosition[i][j] = arrayScore[i];
            }
        }
    }

    // Sort valueScorePosition by value (high to low or low to high depending on paramater given)
    if (reverse) {
        valueScorePosition.sort((a, b) => (b[0] - a[0] || (b[1] - a[1])))
    } else {
        valueScorePosition.sort((a, b) => (a[0] - b[0] || (a[1] - b[1])))
    }

    let newArrayScore = new Array()

    // Sort the new array by finding scores and putting the scores first as the values are already sorted
    for(i = highest; i > 0; i--) {
        for(j = 0; j < valueScorePosition.length; j++) {
            if(valueScorePosition[j][2] == i) {
                newArrayScore.push(valueScorePosition[j])
            }
        }
    }

    return newArrayScore;
}

function sortList(array, arrayScore) {
    let result = []

    switch(sortBy) {
        case 0: // default
            result = arrayScore;
        break;

        case 1: // price (high to low)
            result.push(...sortValues(array, arrayScore, 'price', true))
        break;
        
        case 2: // price (low to high)
            result.push(...sortValues(array, arrayScore, 'price', false))
        break;

        case 3: // mileage (high to low)
            result.push(...sortValues(array, arrayScore, 'mileage', true))
        break;

        case 4: // mileage (low to high)
            result.push(...sortValues(array, arrayScore, 'mileage', false))
        break;
    }

    return result;
}
