/** Business rules

Beef: 400gr for person. Above 6 hours increase to 650gr for person
Beer: 1.200ml for person. Above 6 hours increase to 2000ml for person
Soda: 1.000ml por person. Above 6 hours increase to 1.500ml for person

Children are worth 0,5 (half) **/

const inputAdult = document.getElementById('adult');
const inputChild = document.getElementById('child');
const inputDuration = document.getElementById('duration');
const buttonCalc = document.getElementById('calc');
const result = document.getElementById('result');

let beef = 400;
let beer = 1200;
let soda = 1000;

let beefMore6h = 250;
let beerMore6h = 800;
let sodaMore6h = 500;

calc.addEventListener('click', calcBarbecueResults);

// Show the final results

function displayResults(beef, beer, soda) {

    let results = convertMeasures(beef, beer, soda);

    console.log(results);

}

// Convert measures from milliliters(ml) to liters(lt) and return an object

function convertMeasures(beef, beer, soda) {

    let convertered_beef = beef / 1000;
    let convertered_beer = beer / 1000;
    let convertered_soda = soda / 1000;

    return {
        convertered_beef,
        convertered_beer,
        convertered_soda
    }
}

// Get the values from the inputs fields and calculate the results in grams(gr) and milliliters(ml)

function calcBarbecueResults() {

    let resultBeef;
    let resultBeer;
    let resultSoda;

    if (inputDuration.value > 6) {
        resultBeef = (beef + beefMore6h) * inputAdult.value + (((beef + beefMore6h) / 2) * inputChild.value);
        resultBeer = (beer + beerMore6h) * inputAdult.value;
        resultSoda = (soda + sodaMore6h) * inputAdult.value + (((soda + sodaMore6h) / 2) * inputChild.value);

        displayResults(resultBeef, resultBeer, resultSoda);
    } else {
        resultBeef = beef * inputAdult.value + ((beef / 2) * inputChild.value);
        resultBeer = beer * inputAdult.value;
        resultSoda = soda * inputAdult.value + ((soda / 2) * inputChild.value);

        displayResults(resultBeef, resultBeer, resultSoda);
    }
}