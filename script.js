/*
  Author: Ashton Curl (He's so cool)
  Description: Project 2. 
*/
//-----------------
function calculate(operator) 
{
  //step 1: get user inputs
  let num1 = parseFloat(document.querySelector("#num1").value);
  let num2 = parseFloat(document.querySelector("#num2").value);
  //step 2: validate them
  if(isNaN(num1) || isNaN(num2))
  {
    alert("Please enter a valid number!");
    return;
  }
  //step 3: call getResult
  const result = getResult(num1, num2, operator);
  //step 4: dispaly the results
  displayCalculatorResult(num1, num2, operator, result);
}//end function calculate
//-----------------
function getResult(num1, num2, operator) 
{
  let result;
  if(operator === "+")
  {
    result = num1 + num2;
  }
  else if(operator === "-")
  {
    result = num1 - num2;
  }
  else if(operator === "*")
  {
   result = num1 * num2;
  }
  else if(operator === "/")
  {
    if(num2 === 0)
    {
      result = "undefined you silly goose";
    }
    else
    {
      result = num1 / num2;
    }
  }
  else
  {
      result = "undefined. How did you even do that?";
  }
  return result;
}
//-----------------
function displayCalculatorResult(num1, num2, operator, result) 
{
  document.querySelector("#result").value = result;

  const history = document.querySelector("#history");
  //creating a history to display
  const newLi = document.createElement("li");
  newLi.textContent = `${num1} ${operator} ${num2} = ${result}`;
  history.appendChild(newLi);
}
//-----------------
function clearHistory() 
{
  const history = document.querySelector("#history");
  history.innerHTML = "";
}
//-----------------
function clearCalculatorInputs() 
{
  document.querySelector("#num1").value = "";
  document.querySelector("#num2").value = "";
  document.querySelector("#result").value = "";
}
//-----------------
//Part 2: NATO 
//-----------------
function chToNato(ch) 
{
  const nato = 
  {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "0": "Zero"
  };
  return nato[ch.toUpperCase()] || ch; 
  //||ch so that it takes symbles like "!"
  //tertiary statement (trust me bro)
}
//-----------------
function wordToNato(word) 
{
  return word.trim().split("").map(chToNato).join(" "); 
}
//-----------------
function sentenceToNato(sentence) 
{
  return sentence.trim().split(" ").map(wordToNato).join(" ");
  //notice the difference on split
}
//-----------------
function verbalize() 
{
  let string = document.getElementById("inputString").value; 
  //gets input string
  const result = sentenceToNato(string);
  //gets result
  document.querySelector("#natoResult").textContent = result; 
  //displays result
}
//-----------------
function clearNATOInputs() 
{
  document.querySelector("#inputString").value = "";
  document.querySelector("#natoResult").textContent = "";
}//end function clearNATOInputs
//-----------------
function setup() {
  //calculate section
    //calculations
    document.querySelector("#add").addEventListener("click", ()=> calculate("+"));    
    document.querySelector("#subtract").addEventListener("click", ()=> calculate("-"));    
    document.querySelector("#multiply").addEventListener("click", ()=> calculate("*"));    
    document.querySelector("#divide").addEventListener("click", ()=> calculate("/"));   
    //clearing
    document.querySelector("#clearHistory").addEventListener("click", clearHistory);    
    document.querySelector("#clearCalculator").addEventListener("click", clearCalculatorInputs);    
  //-----------------------
  //NATO section
    //clearing
    document.getElementById("clearNATO").addEventListener("click", clearNATOInputs);    
    //functionality 
    document.getElementById("verbalize").addEventListener("click", verbalize);
}
//-----------------
//An event listener for when the DOM content is loaded to initialize the setup function.
window.addEventListener("DOMContentLoaded", setup);
