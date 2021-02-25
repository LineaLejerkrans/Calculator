let input = []; //to store the numbers and signs you click on
let index = 0; //the order of the neumbers 
let number = 0;
let elem = document.getElementById('display'); //get the value of the input tag, so you can change what's on the display


document.querySelectorAll(".key").forEach( //every element that has the class "key" 
    el => { 
        el.addEventListener('click', () => handleClick(el.id)) //adds a listner, that waits for a "click" and when "click" 
        //it calls the function handleClick with the id of the button you cliked on
});

function handleClick(keyId){ //receives the id 
console.log(elem.value);
    switch (keyId) { //checks for which id
        case '0':
            if (elem.value != 0){
                input[index++]=(keyId);  //parseInt
                elem.value = input.join(""); // elem.value is the number that shows on the calculator, join is a function that returns al the elements in the array, 
                //the "" means that there shoudn't be any space between them
                number = input.join("");
            }
            break;
        case '1':
        case '2':
        case '3':  
        case '4': 
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9':   
            // This will happen if you press either of the numbers above except zero
            input[index++]=(keyId);                
            elem.value = input.join(""); 
            number = input.join("");
                                                
           
            break;

        case 'clear':   
            location.reload(); // Reloads the page 
            break;
        
        case 'percent':
            number = number*0.01;
            elem.value = number;
            break;
        
        case 'negate':
            number = -number; // Makes it possible to make a negative number positiv by adding anonother minus
            elem.value = number;
            break;

        case 'dot': 
            if(input.includes(".")){ // If there is already an dot on the screen it wont try to write another
            }
            else {
                input[index++]= '.';
                elem.value = input.join("")+'0'; // You wanna add the 0 after the dot, so that the line can be parsed, otherwise it wont se the line as a number 
            } 
            break;

        case 'divide':
            input[index++]= '/';
            
            
            
            break;
    }
}

