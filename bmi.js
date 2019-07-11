function calcBmi(weight,height){
      var result=weight/(height*height);
      return result;
}

//collecting data from the user
var weight= parseInt(prompt("Enter weight"));
var height=parseFloat(prompt("Enter height"));
 var yourBmi=calcBmi(weight,height);

alert(yourBmi);
if(yourBmi>25){
  alert("Overweight");
}else if(yourBmi<18){
  alert("You are underweight");
}else{
  alert("Average");
}
const far=9/5;
function temperature(degrees){
  var temp=(degrees*far)+32;
  return temp;
}
var degrees=parseInt(prompt("enter temperature"));
alert(temperature(degrees) + "F");


function farenheit(farens){
  var fare=(farens-32)*far;
  return fare;
}
var farens=parseInt(prompt("enter your temperature"));
alert(farenheit(farens) + "c");
