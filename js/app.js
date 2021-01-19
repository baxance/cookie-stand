'use strict'

let cookHours = ['6am: ','7am: ','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ']

let seattle = { // 23/65 min/max 6.3 avg
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  cookSales: [],
  totalSales: 0,
  sales: function () {
    let salesList = document.getElementById('salesListSea');
    for (let i = 0; i < cookHours.length; i++) { //for each index of cookHours (time open) runs RNG
      let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust; // generates random number between the minimum and maximum key:values
      salesPerHour = Math.floor(salesPerHour * this.avgCust); // takes the randomly generated numberand multiplies by average customer/hr and then divides by the total amount of hours open (14) to get 

      let column = document.createElement('li'); //create variable 'column' that creates a list element
      column.textContent = cookHours[i] + salesPerHour + ' cookies'; //for each array index print into list item the indexed string, the RGN from the function and the string ' cookies'

      salesList.appendChild(column); //create list element separate of the above
      this.totalSales = this.totalSales + salesPerHour;  
      this.cookSales.push(this.totalSales);// for each number generated it's added to the key totalSales which is then saved to an array
    
    }
    
    let columnTotal = document.createElement('li');
    columnTotal.textContent = 'Total: ' + this.totalSales + ' cookies',
    salesList.appendChild(columnTotal);

  } // all of the above is within the code block for the function 
};

seattle.sales();

/////////////////ctrl + C / ctrl + V Time!//////////////////////////////////////////

let tokyo = { // 3/24 min/max 1.2 avg
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCust: 1.2,
    cookSales: [],
    totalSales: 0,
    sales: function () {
      let salesList = document.getElementById('salesListTokyo');
      for (let i = 0; i < cookHours.length; i++) {
        let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust;
        salesPerHour = Math.floor(salesPerHour * this.avgCust);
  
        let column = document.createElement('li');
        column.textContent = cookHours[i] + salesPerHour + ' cookies';
  
        salesList.appendChild(column);
        this.totalSales = this.totalSales + salesPerHour;
        this.cookSales.push(this.totalSales);
      
      }
      
      let columnTotal = document.createElement('li');
      columnTotal.textContent = 'Total: ' + this.totalSales + ' cookies',
      salesList.appendChild(columnTotal);
  
    }
  };

tokyo.sales();


let dubai = { // 11/38 min/max 3.7 avg
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  cookSales: [],
  totalSales: 0,
  sales: function () {
    let salesList = document.getElementById('salesListDub');
    for (let i = 0; i < cookHours.length; i++) {
      let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust;
      salesPerHour = Math.floor(salesPerHour * this.avgCust);

      let column = document.createElement('li');
      column.textContent = cookHours[i] + salesPerHour + ' cookies';

      salesList.appendChild(column);
      this.totalSales = this.totalSales + salesPerHour;
      this.cookSales.push(this.totalSales);
    
    }
    
    let columnTotal = document.createElement('li');
    columnTotal.textContent = 'Total: ' + this.totalSales + ' cookies',
    salesList.appendChild(columnTotal);

  }
};

dubai.sales();

let paris = { // 20/38 min/max 2.3 avg
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  cookSales: [],
  totalSales: 0,
  sales: function () {
    let salesList = document.getElementById('salesListParis');
    for (let i = 0; i < cookHours.length; i++) {
      let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust;
      salesPerHour = Math.floor(salesPerHour * this.avgCust);

      let column = document.createElement('li');
      column.textContent = cookHours[i] + salesPerHour + ' cookies';

      salesList.appendChild(column);
      this.totalSales = this.totalSales + salesPerHour;
      this.cookSales.push(this.totalSales);
    
    }
    
    let columnTotal = document.createElement('li');
    columnTotal.textContent = 'Total: ' + this.totalSales + ' cookies',
    salesList.appendChild(columnTotal);

  }
};

paris.sales();


let lima = { // 2/16 min/max 4.6 avg
name: 'Lima',
minCust: 20,
maxCust: 38,
avgCust: 2.3,
cookSales: [],
totalSales: 0,
sales: function () {
  let salesList = document.getElementById('salesListLima');
  for (let i = 0; i < cookHours.length; i++) {
    let salesPerHour = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    salesPerHour = Math.floor(salesPerHour * this.avgCust);

    let column = document.createElement('li');
    column.textContent = cookHours[i] + salesPerHour + ' cookies';

    salesList.appendChild(column);
    this.totalSales = this.totalSales + salesPerHour;
    this.cookSales.push(this.totalSales);
  
  }
  
  let columnTotal = document.createElement('li');
  columnTotal.textContent = 'Total: ' + this.totalSales + ' cookies',
  salesList.appendChild(columnTotal);

}
};

lima.sales();