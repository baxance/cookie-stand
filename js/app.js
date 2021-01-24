'use strict'

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

let storeForm = document.getElementById('storeForm');
let formTable = document.getElementById('newStore')

storeForm.addEventListener('submit', function (form) {
  form.preventDefault();
  let name = form.target.name.value;
  let minCust = form.target.minCust.value;
  let maxCust = form.target.maxCust.value;
  let avgSale = form.target.avgSale.value;

  let nameColumn = document.createElement('tr');
  let minColumn = document.createElement('tr');
  let maxColumn = document.createElement('tr');
  let avgColumn = document.createElement('tr');

  let nameRow = document.createElement('td');
  let minRow = document.createElement('td');
  let maxRow = document.createElement('td');
  let avgRow = document.createElement('td');

  nameColumn.textContent = 'Store Location: ';
  nameRow.textContent = name;
  formTable.appendChild(nameColumn);
  formTable.appendChild(nameRow);
  
  
  
  minColumn.textContent = 'Low Customer Traffic: ';
  minRow.textContent = minCust;
  formTable.appendChild(minColumn);
  formTable.appendChild(minRow);
  
  
  maxColumn.textContent = 'High Customer Traffoc: ';
  maxRow.textContent = maxCust;
  formTable.appendChild(maxColumn);
  formTable.appendChild(maxRow);
  
  avgColumn.textContent = 'Average Sales per Customer: ';
  avgRow.textContent = avgSale;  
  formTable.appendChild(avgColumn);
  formTable.appendChild(avgRow);

  
  // let column = document.createElement('tr');
  // let row = document.createElement('td');
  // column.textContent = name;
  // row.textContent = minCust;
  // row.textContent = maxCust;
  // row.textContent = avgSale;
  // formTable.appendChild(column);
});

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