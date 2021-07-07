// Code your solution in this file!
function distanceFromHqInBlocks(pickupStreet) {
    const headquarterStreet = 42;
    let numberOfStreets = pickupStreet - headquarterStreet;
    return Math.abs(numberOfStreets);
}

function distanceFromHqInFeet(beginningBlock) {
    let distance = distanceFromHqInBlocks(beginningBlock) * 264;
    return distance;
}

function distanceTravelledInFeet(beginningBlock, destinationBlock) {
    let distance = Math.abs((destinationBlock - beginningBlock) * 264);
    return distance;
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs((destination - start) * 264);
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return ((distance - 400) * 0.02)
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return ("cannot travel that far")
    }
}