const btns = document.querySelector(".btns")
const mainDisplay = document.querySelector(".main-display")
const secondDisplay = document.querySelector(".second-display")
btns.addEventListener("click",function(e){
    try{
    if(e.target.value == "="){
        mainDisplay.value = eval(mainDisplay.value);
        secondDisplay.value = "";
    }else if(e.target.value == "AC"){
        secondDisplay.value = "";
        mainDisplay.value = "";
    }
    else{
        mainDisplay.value += `${e.target.value}`;
        secondDisplay.value = parseInt(eval(mainDisplay.value));
    }
}catch(err){
    

}
})