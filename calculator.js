let input = []; //to store the numbers and signs you click on
let index = 0; //the order of the neumbers 
let number = 0;
let elem = document.getElementById('display'); //get the value of the input tag, so you can change what's on the display

document.querySelectorAll(".key").forEach( //every element that has the class "key" 
    el => { 
        el.addEventListener('click', () => handleClick(el.id)) //adds a listner, that waits for a "click" and when "click" it calls the function handleClick with the id of the button you cliked on
});

function handleClick(keyId){ //recives the id 
    switch (keyId) { //checks for which id
        case '0':
            //fix so you can't add more zeros unless it's another number before it
        case '1':
        case '2':
        case '3':  
        case '4': 
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9':   
            input[index++]=parseInt(keyId);
            elem.value = input.join("");
            number = input.join("");
            break;

        case 'clear':   
            index = 0;
            input = [];
            elem.value = 0;
            break;
        
        case 'percent':
            number = number*0.01;
            elem.value = number;
            break;
        
        case 'negate':
            number = -number;
            elem.value = number;
            break;

        case 'dot': //fix so you can see the dot even if there aren't any number behind it 
            input[index++]= '.';
            elem.value = input.join("");
            break;
    }
}

