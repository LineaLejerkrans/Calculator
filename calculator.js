let input = ["",""]; //to store the numbers you click on as strings but for now the the two fist positions are empty
let signs = []; // store the signs
let index = 0; // to decide which field in the array that should be active
let elem = document.getElementById('display'); //get the value of the input tag, so you can change what's on the display
let calc = false; // to track if you press multiple operators after each other
 

function numbers(keyId){
  
    if (calc) // if you have done a calculation and press a new numbers you want to erase the old numbers in the array
    {
       input[0] = "";
       calc = false;
    }
    console.log({input});
    input[index] = input[index] + (keyId);           
    elem.value = input[index]; // print the numbers  
}
 
function operator(keyId){
   calc = false;
   if (input[0] != "" && input[1] != "") { // if you have numbers in both positions than you will automatically calculate them if you were to press a new operator before clicking equal
       calculate();
   }
   if (input[0] != "") { // if you only have numbers in the first position than you want to change to the other
       index =1 ;
   }
   signs = keyId; // put the id of the operator in an array, it will only remember the last operator you clicked on if you were to click twice at an operator
   console.log(signs);
}
 
function calculate(){
   let result = 0;
   x = parseFloat(input[0]); // convert the array which is a string to a float
   y = parseFloat(input[1]);
 
   switch(signs) {
       case 'multiply':
           result = x * y;
       break;
 
       case 'subtract':
           result = x - y;
       break;
 
       case 'add':
           result = x + y;
       break;
 
       case 'divide':
           if (input[1] == "0") // if you try to divide by 0 it will show error
           {
               elem.value = "Error";
           }
           else {
               result = x / y;
           }
       break;
       }
       if (elem.value == "Error"){
       }
       else{
           elem.value = result; // display the result unless it's error
       }
      
       console.log(result);
       input[0] = result.toString(); // put the result as a string in the first position
       input[1] = ""; // and clear the second one
       index = 0; // change the index to 0
       calc = true; // to know if you have done a calculation
}
 
 
 
function handleClick(keyId){ //receives the id
   if (keyId == 'dot'){
       if (!input[index].includes(".")){ // if there is already a dot in the number you don't want to add another
           input[index] = input[index] + '.';
           elem.value = input[index];
       }
     
   }
   else if (keyId =='negate') {
       input[index] = (-parseFloat(input[index])).toString(); // you convert what you have in the array to a float than make it negative and then convert it back to a string
       elem.value = input[index];
   }
   else if (keyId == 'percent') {
       input[index] = (0.01*parseFloat(input[index])).toString(); // same here only that you take the number times 0.01
       elem.value = input[index];
   }
   else if (keyId == 'clear') {
       location.reload(); // Reloads the page
   }
   else if (!isNaN(parseInt(keyId))){ // if what you press is a number than the numbers function will be called
       numbers(keyId);
   }
   else if (keyId == 'equal'){ // if you press equal than the calculate function is called
       calculate();
   }
   else { // if the keyid is neither of the ones above than it's an operator
       operator(keyId);
   }
}
 
 
   document.querySelectorAll(".key").forEach( //every element that has the class "key"
   el => {
       el.addEventListener('click', () => handleClick(el.id)) //adds a listener, that waits for a "click" and when "click"
       //it calls the function handleClick with the id of the button you clicked on
});
 
 
 
 
 
 
// kan inte ta 2 + 2 + 2
// ska inte kunna skriva flera nollor efter varandra
// inte skriva in hur långa tal som helst och göra siffrorna mindre när de blir för många 
 
 
