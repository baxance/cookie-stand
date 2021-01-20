'use strict'

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

// lecture example for creating a table
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


let storeHours = ['Store Locations:', '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Daily Location Total:']; // global array for hours

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

storeHours = ['Store Locations:', '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Daily Location Total:']; // global array for hours

function openHours() { // function for top row of 

  let tableBody = document.getElementById('table-body')

  let hoursRow = document.createElement('tr');

  for (let i =0; i < storeHours.length; i++) {
    let hoursColumn = document.createElement('td');
    hoursColumn.textContent = storeHours[i];
    hoursRow.appendChild(hoursColumn);
  }
  tableBody.appendChild(hoursRow);

}
openHours();




// let seaRow = document.createElement('tr');
// let tokyoRow = document.createElement('tr');
// let dubRow = document.createElement('tr');
// let parisRow = document.createElement('tr');
// let limaRow = document.createElement('tr');
// name string, minimum customers, max customers, avg sales per customer
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

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