let input = ["",""]; //to store the numbers you click on as strings but for now the the two fist positions are empty
let signs = []; // store the signs
let index = 0; // to decide which field in the array that should be active
let elem = document.getElementById('display'); //get the value of the input tag, so you can change what's on the display
let calc = false; // to track if you press multiple operators after each other
let checkCalc = true; // to track if you called the function calculate by pressing equal or pressing another operator like 2+2+
 
function numbers(keyId){
   if ((''+input[index]).length<18){ // it will only print a maximum of 18 digits
       if (!(input[index]=='0' && keyId == '0')){ // so you can't write multiple zeros at the start
           if (calc && checkCalc){ // if you have done a calculation and press a new numbers you want to erase the old numbers in the array, but this can only happen if you called the function calculate by pressing equal
               input[0] = "";
               calc = false;
           }
           if (input[index] == '0'){ // if you press 0 than for exampel 2 you don't want it to write 02 but just 2
               input[index] = "";
           }
           console.log({input});
           input[index] = input[index] + (keyId); // put the id of the number into the array     
           elem.value = input[index]; // print the numbers  
           check();
           checkCalc = true;
       }
   }
}
 
function check(){ // checks how many digits the number have and if it's more than 15 it will make the font smaller
   if ((''+input[index]).length>15) {
       elem.style.fontSize = '20px';
   }
   else {
       elem.style.fontSize = '28px';
   }
}
 
function operator(keyId){
   calc = false;
   checkCalc = true;
   if (input[0] != "" && input[1] != "") { // if you have numbers in both positions than you will automatically calculate them if you were to press a new operator before clicking equal
       calculate();
       checkCalc = false; // this means you called calculate by pressing an operator and not by clicking equal so you don't want to erase the numbers in the first position
   }
   if (input[0] != "") { // if you only have numbers in the first position than you want to change to the other
       index =1 ;
   }
   signs = keyId; // put the id of the operator in an array, it will only remember the last operator you clicked on, if you were to click twice at an operator
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
           if (input[1] == "0" || input[1] == "") // if you try to divide by 0 it will show error
           {
               elem.value = "Error";
           }
           else {
               result = x / y;
           }
           
       break;
       }
 
       if (elem.value != "Error"){
           if ((''+result).length>15) {
               elem.style.fontSize = '20px';  
               result = result.toFixed(15); // to limit how many decimals the result can have, because otherwise it does some weird things sometimes
           }
           else {
               elem.style.fontSize = '28px';
           }
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



// if you press 0 once it will show it on the screen but if you try pressing it agian nothing more 
// will show which is what I want, but if you press zero than two it will show 02 on the screen 
// which I don't want