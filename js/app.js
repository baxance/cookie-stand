'use strict'

////////////////////Lab06 code sample, copy pasted for other locations///////////////////////////

// let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

// let seattle = { // 23/65 min/max 6.3 avg
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCust: 6.3,
//   daySales: [],
//   sumSales: 0,
//   sales: function () {
//     let salesList = document.getElementById('salesListSea');
//     for (let i = 0; i < storeHours.length; i++) { //for each index of storeHours (time open) runs RNG
//       let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust; // generates random number between the minimum and maximum key:values
//       salesPerHour = Math.floor(salesPerHour * this.avgCust); // takes the randomly generated numberand multiplies by average customer/hr and then divides by the total amount of hours open (14) to get 

//       let column = document.createElement('li'); //create variable 'column' that creates a list element
//       column.textContent = cookHours[i] + salesPerHour + ' cookies'; //for each array index print into list item the indexed string, the RGN from the function and the string ' cookies'

//       salesList.appendChild(column); //create list element separate of the above
//       this.sumSales = this.sumSales + salesPerHour;  
//       this.daySales.push(this.sumSales);// for each number generated it's added to the key totalSales which is then saved to an array
    
//     }
    
//     let columnTotal = document.createElement('li');
//     columnTotal.textContent = 'Total: ' + this.sumSales + ' cookies',
//     salesList.appendChild(columnTotal);

//   } // all of the above is within the code block for the function 
// };

// seattle.sales();

/////////////////Construction Notation Begins//////////////////////////////////////////

////////////////////////////////////////////////////////lecture example for creating a table
// let tableBody = document.getElementById('table-body')

// let rowOne = document.createElement('tr'); // creates <tr> </tr> tags (table row)
// let cellOne = document.createElement('td'); // creates <td> </td> tags ( table d...cell?)
// let cellTwo = document.createElement('td'); //create 2nd set of <td> </td> tags

// cellOne.textContent = 'Row one Cell one'  //calls the prev. defined variable for a <tr> </tr> element and establishes what text content to insert into it
// cellTwo.textContent = 'Row one Cell two'

// rowOne.appendChild(cellOne);// elements are created and the text within them is established. Working from the furthest child element to the fore, we select rowOne and add (append) the child element of cellOne and cellTwo  into it on separate lines (and with those variables carrying with them text values and defined elements)
// rowOne.appendChild(cellTwo);
// tableBody.appendChild(rowOne); // Finally take the first row (now according to the computer's memory with containing the child elements and their text content)


//create a Constructor Function called SalmonCookies or something that will contain am Object of the Properties and Method shared between store locations


let tableBody = document.getElementById('table-body')

let storeHours = ['Store Locations ','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']; // global array for hours and other things

function timeAndTotal() {
  // let hoursHeader = document.createElement('th')

  for (let i = 0; i < storeHours.length; i++) {
    let hoursHeader = document.createElement('th')
    hoursHeader.textContent = storeHours[i];
    tableBody.appendChild(hoursHeader);
  }
  let locTote = document.createElement('tfoot')
  locTote.textContent = 'Daily Location Total'
  tableBody.appendChild(locTote);
}

timeAndTotal();


function Store(name, minCust, maxCust, avgSale, daySales, sumSales){
  this.name = name; //location of store
  this.minCust = minCust; //minimum amount of customers/day
  this.maxCust = maxCust; // maximum customers/day
  this.avgSale = avgSale; //avg cookies sold per customer
  this.daySales = []; // empty array
  this.sumSales = 0; // 
  // this.sales = function() {
}

// create function create elements to display on html

// function openHours() { // function for top row of table, headers for location and totals and the hours each rgn takes place in

//   // let tableBody = document.getElementById('table-body')

//   let hoursRow = document.createElement('tr');

//   for (let i =0; i < storeHours.length; i++) {
//     let hoursColumn = document.createElement('td');
//     hoursColumn.textContent = storeHours[i];
//     hoursRow.appendChild(hoursColumn);
//   }
//   tableBody.appendChild(hoursRow);

// }
// openHours();

// RNG function/loop
Store.prototype.RNG = function () {
  for (let j = 0; j < storeHours.length; j++) {
    let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust //generate RN with a range between the minimum and maximum. what would the +1 do?
    salesPerHour = Math.floor(salesPerHour * this.avgSale)

    this.daySales.push(salesPerHour); //pushes 
    this.sumSales = salesPerHour + this.sumSales
  }
  
}


Store.prototype.display = function () {
  this.RNG();
  let storeHoursDisplay = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']; // this is unnecessary, using the array as a table for the times in the beginning is the conflict probably, change it to something else?
  let column = document.createElement('tr');
  let row = document.createElement('td');
  column.textContent = this.name;
  row.appendChild(column);

  for (let k = 0; k < storeHoursDisplay.length; k++) {

    row = document.createElement('td');
    row.textContent = this.daySales[k];

    column.appendChild(row);

  }

  row = document.createElement('td');
  row.textContent = this.sumSales;
  column.appendChild(row);
  tableBody.appendChild(column)

};

// name string, minimum customers, max customers, avg sales per customer
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.display();
tokyo.display();
dubai.display();
paris.display();
lima.display();

//   for ( let j = 0; j > 5; j++) {

//     let nameRow = document.createElement('tr');

//     nameRow.textContent = Store.name;
    
//     tableBody.appendChild(nameRow);

//   }
// for (let k = 0; k < storeHours; k++) {

// }
// }


// let seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
// let tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
// let dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
// let paris = new Store('Paris', 20, 38, 2.3, [], 0);
// let lima = new Store('Lima', 2, 16, 4.6, [], 0);
// seattle.display();
// tokyo.display();
// dubai.display();
// paris.display();
// lima.display();

// Store.prototype.display = function ()}

//   let storeHours = [' ', '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Daily Location Total'];

//   let tableBody = document.getElementById('table-body')

//   for (let j = 0; j <storeHours.length; j++) {
//     let nameRow = document
//   }

// }

// console.log(storeHours[i])

// create Instances of the Object by calling the Constructor Function  and add in individual arguments
// ('Store Name', minimum customers, maximum customers, average sales per customer, cookie sales (empty array), total sales (0) )
// let seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
// let tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
// let dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
// let paris = new Store('Paris', 20, 38, 2.3, [], 0);
// let lima = new Store('Lima', 2, 16, 4.6, [], 0);