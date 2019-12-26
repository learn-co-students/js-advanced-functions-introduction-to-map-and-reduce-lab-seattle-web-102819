// Your code here

function mapToNegativize (sourceArray) {
    let result = [];
    for (let i = 0; i < sourceArray.length; i ++) {
        result.push(sourceArray[i]*(-1));
    }
    return result;
}

function mapToNoChange(sourceArray) {
    let result = [];
    for (let i = 0; i < sourceArray.length; i ++) {
        result.push(sourceArray[i]);
    }
    return result;
}

function mapToDouble(sourceArray) {
    let result = [];
    for (let i = 0; i < sourceArray.length; i ++) {
        result.push(sourceArray[i]*2);
    }
    return result;
}

function mapToSquare(sourceArray) {
    let result = [];
    for (let i = 0; i < sourceArray.length; i ++) {
        result.push(sourceArray[i]**2);
    }
    return result;
}

function reduceToTotal(sourceArray, startingPoint) {
    let sum = 0;
    for (let i = 0; i < sourceArray.length; i ++) {
        sum += sourceArray[i];
    }
    if (!startingPoint) {
        return sum;
    } else {
        return (sum + startingPoint);
    }
}

// function reduceToTotal(sourceArray, startingPoint=0) {
//     let sum = startingPoint
//     for (let i = 0; i < sourceArray.length; i++ ) {
//       sum = sum + sourceArray[i]
//     }
//     return sum
//   }

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i ++) {
        if (!sourceArray[i]) {
            return false;
        } 
    }
        return true;
}


function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i ++) {
        if (sourceArray[i]) {
            return true;
        } 
    }
        return false;
}