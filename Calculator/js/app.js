let keypad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operators = ["+","-","*","/","%"];

let filter = x =>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

        if (current == "0" && x != "."){
                clearLast()
        }

        if (operators.includes(x) && operators.includes(lastChar)){
                return false
        }
    return true
}

let showInDisplayBox = x => {
    
    if(filter(x)){
        displayBox.innerText += x
    }
}
let calc = _ =>  {
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length - 1])){
    displayBox.innerText = eval(displayBox.innerText)
}
}

let clearAll = _=> displayBox.innerText = "";

let clearLast =_ =>displayBox.innerText= displayBox.innerText.substring(0,displayBox.innerText.length-1)

keypad.addEventListener("click", _ =>{
    if(displayBox.innerText.length>7){
        displayBox.style.fontSize= 30+"px";
    }else {
        displayBox.style.fontSize=60+"px";
    }
})
        
// if(displayBox.innerText.length>5)