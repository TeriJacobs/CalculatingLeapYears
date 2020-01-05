
//displaying the input value through console.log

function myFunction() {
    var x = document.getElementById("inputValue").value;
    //document.getElementById("result").innerHTML = x;
    console.log(x);
  }

  // If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// The year is a leap year (it has 366 days).
// The year is not a leap year (it has 365 days).

function Calculate(){

    var x = document.getElementById("inputValue").value;


    
    if (x % 4 === 0 ) {
        //  block of code to be executed if condition1 is true
        console.log("leap year");
      } else if (x % 100 === 0) {
        //  block of code to be executed if the condition1 is false and condition2 is true
        console.log("Leap Year");
      }else if (x % 400 === 0){
        document.getElementById('result').innerHTML = ("This is a leap year");
      } else {
        document.getElementById('result').innerHTML = 'This is not a leap year'; 
      }

}

// function Calculate(year)
// {
//   return !((year % 4) && (year % 100) || !(year % 400));
// }