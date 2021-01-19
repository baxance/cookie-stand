'use strict'

let seattle = { // 23/65 min/max 6.3 avg
  name: 'Salmon Cookies',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourly: [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  genHourly: function () {
    let randomCust = Math.floor((Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    // this.hourly = randomCust;
    return randomCust;
  }
}
let array = [];
for (let i = 0; i < seattle.hourly.length; i++) {
  array.push(seattle.genHourly())
}

console.log(array);

// var divElement = document.createElement('div');
// var h2Element = document.createElement('h2'); 
// h2Element.textContent = seattle.name;
// divElement.appendChild(h2Element);
// var contentId = document.getElementById('content');
// contentId.appendChild(divElement);


function createTree(list, hourly) {
  let ul = list.appendChild(document.createElement('ul'));
  for (let [key, val] of Object.entries(hourly)) {
    let li = ul.appendChild(document.createElement('li'));
    li.textContent = key;
    if (Object.keys(val).length) {
      createTree(li, val);
    }
  }
}

createTree(document.getElementById('container'), seattle.hourly);

// ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] hours as string
// [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8]  hours as number
// for (let i = 0; i < hourly.length; i++) {
//  seattle.genHourly()

// }

// seattle.genHourly()

// let tokyo = { // 3/24 min/max 1.2 avg

// }

// let dubai = { // 11/38 min/max 3.7 avg

// }

// let paris = { // 20/38 min/max 2.3 avg

// }

// let lima = { // 2/16 min/max 4.6 avg

// }