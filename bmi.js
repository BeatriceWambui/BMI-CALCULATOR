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
