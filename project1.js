/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/* 
    Author     : Angelique Joubert C22115
*/
//check box
var movies = document.getElementsByName("movie");//triggers the form of date and movies

    function handleCheckboxClick(clickedCheckbox) {//functions fot checkbox in form
      movies.forEach(function (checkbox) {
        if (checkbox !== clickedCheckbox) {//if statement
          checkbox.checked = false;//so users can only choose one option
        }
      });
    }
    
    //array of movies/functions
    var nextMonthsMovies = ["Ant-Man and the Wasp: Quantumania", "John Wick: Chapter 4", "Missing", "Plane", "His Only Son"];//array with movie names.

    var specialsList = document.getElementById("next-months-movies");//variable for printing to page and triggers form by id name

    for (var i = 0; i < nextMonthsMovies.length; i++) {//for loop
      var listItem = document.createElement("li");//variable for the list of items
      listItem.textContent = nextMonthsMovies[i];
      specialsList.appendChild(listItem);
    }
    
        function flvOption1() {//shows flavour the option that was selected by user
            var dropdown = document.getElementById("PopcornF1");//dropdown list with options and links html list for options
            var flvOption1 = dropdown.options[dropdown.selectedIndex].value;//prints the option selected by user from dropdown list
            document.write("Selected option: " + flvOption1);//prints out the information to web page
        };
        
        function drinkOption1() {//shows the option that was selected by user
            var dropdown = document.getElementById("Drink1");//dropdown list with options and links html list for options
            var drinkOption1 = dropdown.options[dropdown.selectedIndex].value;//prints the option selected by user from dropdown list
            document.write("Selected option: " + drinkOption1);//prints out the information to web page
        };
        function SweetOption1() {//shows the option that was selected by user
            var dropdown = document.getElementById("Sweet1");//dropdown list with options and links html list for options
            var SweetOption1 = dropdown.options[dropdown.selectedIndex].value;//prints the option selected by user from dropdown list
            document.write("Selected option: " + SweetOption1);//prints out the information to web page
        };

//prompt and function
var c= prompt("Please enter amount of parking spot bookings(R40).");//prompt(pop-up message) for the user to be abel to insert information.
var carEntr = c;//variable to be used for a calculation depending on the number user tyeps in.
var total = 40;//variable to be used for a calculation.

// The function that calculates the price of total parkings of the previous variables.
function totalC(carEntr, total) {//function to calculate and declaire the variables.
    var parkingSpace = carEntr * total;//will calculate the price (multiplies the user input with the R40 for parking)
    var results = [parkingSpace];//prints the calculation result
    return results;//will print the result.
}
var outputDiv = document.getElementById("parking");//targets the id tag
outputDiv.innerHTML =("Total parking price\:R " + totalC(c, 40) + "<br>"); //prints out the results


//prompt and function
var p= prompt("Please enter how many people would like a Movie snack box(R80) Max 4 people.");//prompt(pop-up message) for the user to be abel to insert information.
var numEntr = p;//varuble to be used for a calculation depending on the number user tyeps in.
var price = 80;//varuble to be used for a calculation.

// The function that calculates the price of total snack boxes of the previous variables.
function totalS(numEntr, price) {//function to calculate and declaire the variables.
    var snackBox = numEntr * price;//will calculate the price (multiplies the user input with the R80 of the snack box)
    var results = [snackBox];//prints the calculation result
    return results;//will print the result.
}
var outputDiv = document.getElementById("snackb");//targets the id tag
outputDiv.innerHTML = ("The Total Snack Box price is \:R " + totalS(p, 80) + "<br>");//prints out the results

//if statement
var pass = 3;      // max parking space per person no more than 2
var msg;            // Message

// Select message to write based on score
if (c < pass) {
  msg = 'Congratulations, you have a secured parking spot!';//will print if the input is larger than 3
} else {
  msg = 'Maximum parking sports are 2 bookings per person please change number or make 2 seperate !';//will print if the input is smaller than 3
}

var el = document.getElementById('result');//prints to the id in html
el.textContent = msg;

//button
var button = document.getElementById("snackBoxflavours");//allows you to click on the button and links the information to the id in html to print out on web page
button.addEventListener("click", function() {//will show the button was clickes on.
  window.location.href = "price.html";//links the second html page to the button that will take you to the page that information was stored in.
});

//button for page update
 function update(){//function for the update page button
    var txt = document.createElement("p");//variables that stores the newly created pharagraph elements
    var modified = document.createElement("p");//variables that stores the newly created pharagraph elements
    var update = document.getElementById("pageUpdate");//variable that stores the id of the button(calls the id tag in html)
    
    var txtValue = document.createTextNode("This page was last update:"); //variables to store the text
    var lastMod = document.createTextNode(document.lastModified);//variables to store the text


//nesting elements in each other and in the innerHTML div tag to be able to print the results
    update.appendChild(txt);
    update.appendChild(modified);
    txt.appendChild(txtValue);
    modified.appendChild(lastMod);
}