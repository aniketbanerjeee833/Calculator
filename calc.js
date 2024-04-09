let currentDisplay="0";
let resultDisplay=false;
const display=document.querySelector(".display1");
const newDisplay=(()=>
{
    display.textContent=currentDisplay;
});
const appendToDisplay =((value) =>
{
    if(currentDisplay==="0"|| resultDisplay)
    {
    currentDisplay=value;
    }
    
    else{
    currentDisplay = currentDisplay + value;
    }
    //resultDisplay=false;
    console.log(currentDisplay);
    resultDisplay=false;

    newDisplay();
});
 const calculateResult=(()=>
 {
    try{
   const result=eval(currentDisplay)
    display.innerHTML=(result.toFixed(3));
    currentDisplay=(result.toFixed(3));
    //console.log(currentDisplay);
    //console.log(result);
    }
    catch(error)
    {
        console.log("undefined");
        display.innerHTML=("undefined");
    }
    //localStorage.setItem("calculator",JSON.stringify(display));
 });

 const clearScreen =(()=>
 {
    currentDisplay="0";
    newDisplay();

 });
 const clearElement=(()=>
 {
    strArr=Array.from(currentDisplay);
    console.log(strArr);
    newArray=strArr.splice(-1,1);
   // console.log(newArray);
    console.log(strArr);
   currentDisplay= strArr.join("");
   console.log(currentDisplay);
   display.textContent=currentDisplay;

    //display.innerText=currentDisplay.slice();
 });