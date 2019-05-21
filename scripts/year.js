/* Add current year to HTML*/

var thisDate = new Date();
var thisYear = thisDate.getFullYear(); 
document.getElementById("copyright-year").innerHTML = thisYear;