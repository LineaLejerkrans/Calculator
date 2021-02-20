let input = [];
let index = 0;
let number = 0;
let elem = document.getElementById('display');
let pers = 0;

document.querySelectorAll(".key").forEach(
    el => { 
        el.addEventListener('click', () => handleClick(el.id))
});

function handleClick(keyId){
    switch (keyId) {
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
            pers = number*0.01;
            elem.value = pers;
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

