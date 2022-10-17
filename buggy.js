// I should be defined and transform in boolean.
// We defined and transofrm the const isWorking whith the boolean true.
const isWorking = true;


if (!isWorking || typeof isWorking !== 'boolean') {
    throw new Error('Should be defined and be convert into boolean...');
}

// Do i forget something in the function parameter ?
// We add the function parameter to "isOK"
function getStatus(isOk) {
    if (!isOk) {
        throw new Error('is ok is not defined');
    }
    console.log(isOk);
    return isOk;
}

getStatus('it works');



// You should define the missing informations in this object.
// The missing information is described in the getFusilAssaut function.
const spartan = {
    firstName: 'John',
    lastName: '117',
    age: 56,
    occupation: 'Master Chief',
    company: 'Microsoft',
    weapons: ["Fusil d'assaut MA5B"]
}

// Add the missing key in the spartan object.
// We add the weapon key inside the spartan object

function getFusilAssaut() {
    console.log(spartan.weapons);
    // On fait le -1 parce que en programmation on compte à partir du 0 
    // mais le .length retourne le total sans commencer par 0.
    return spartan.weapons[spartan.weapons.length - 1] === "Fusil d'assaut MA5B"; // Should be "Fusil d'assaut MA5B"
}

getFusilAssaut();
// We change push to unshift
function addWeapon(name) {
    spartan.weapons.unshift(name);
}
// We create a new weapon called sniper
addWeapon('sniper');

// Do i forget to call something ?
if (!spartan.weapons.includes('sniper')) {
    throw new Error('John 117 should have a sniper too ....');
}

// Oopsy, we add sniper, now this function does not work anymore...
// Look how to find for exact value in array in javascript.
// dont hesitate to refactor the getFusilAssaut function to find Fusil d'assaut MA5B 
if (!getFusilAssaut()) {
    throw new Error(`I am not the Fusil d'assaut MA5B`)
}



// Make sure to convert string to number when making addition.
function sum(a, b) {
    // we converted the string ('2') to number (2)
    const total = a + +b;
    if (total === "22") {
        throw new Error('There is an issue with your typing');
    }
    console.log(`total ====> ${total}`)
    return total;
}

// Dont change me....
sum(2, '2'); // Should be 4



console.log('If i am displayed, you made it works !!! Congratulation !!!!!!!!!')