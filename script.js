var isDate = function (input) {
  //   write your code here
	
    return !isNaN(Date.parse(input));  // Valid if it's not an invalid date
  
  // return (/^\d{4}-\d{2}-\d{2}$/.test(input))
};

// Do not change the code below.
const input = prompt("Enter Date."); 
alert(isDate(input));
