const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers() {
    const formulaOne = drivers.slice(0, 2);
        return formulaOne;
}
returnFirstTwoDrivers();


function returnLastTwoDrivers() {
    const formulaTwo = drivers.slice(-2);
    return formulaTwo;
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fareSystem) {
    return function (totalFare) {
        return fareSystem * totalFare;
    }
}
createFareMultiplier();


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, driver) {
    return driver(drivers);
}