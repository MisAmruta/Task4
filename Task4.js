/* var request = new XMLHttpRequest();

request.open('GET' , 'https://restcountries.eu/rest/v2/all',true);

request.send();
request.onload = function(){

    var countrydata = JSON.parse(this.response);
  
   var result  = countrydata.filter(element => {
    return element.region === "Asia";
});

console.log(result);
} */

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.send();

// Problem 1: Get all countries from Asia contentinent region

request.onload = function(){

    //1.Get all countries from Asia region using filter function

    var countryData = JSON.parse(this.response);
    var arr = countryData.filter(Cregion => {return Cregion.region === "Asia";}); 
    arr.map(element=>console.log(element.name));

    //2. Get all countries with population of less than 2 lacs using filter function

    var countrydata = JSON.parse(this.response);

    var count = countryData.filter(element => {return element.population < '200000' ;});
    count.map(ele => console.log(ele.name));

    // Print the following details name,capital,flag using forEach function
    var countrydata = JSON.parse(this.response);
     countryData.forEach(element => console.log("Name:",element.name ,"Capital:" ,element.capital ,"Flag:" ,element.flag) );
    
     // Print total population of countries using reduce function
     var popl = countryData.reduce((acc,element) => { return acc+element.population ;}, 0);
     console.log(popl);

     
}