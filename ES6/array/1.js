let ages = [32,15,19,12];

// let nums = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i]<=18) {
//         ages.splice(i,1);
//         i--;
//     }
// }

let adultArr = ages.filter(age => age>=18);

let adultPresent = ages.some(age => age>=18);

let allOldEnough = ages.every(age => age>=18);




console.log(allOldEnough);