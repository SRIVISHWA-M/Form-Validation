function validateform() {

  const name=document.getElementById("name").value;
  const patten1 = /^[a-zA-Z]+$/;
  let result1 ="";
  if (name==="") {
    result1 ="*Name is Required*";
  } 
  else if (!patten1.test(name)) {
      result1 = "*Not Valid*";
    }
  else if (name.length<=3){
    result1="*The Name is Too Shot*";
  }
  document.getElementById("name-error").innerHTML=result1;

// --------------------Number-----------------
  const number=document.getElementById("number").value;
  let result2 ="";
  if (number==="") {
    result2="*Number is Required*";
  } else if (isNaN(number)){
      result2= "*Number is Not Valid*"
    }
  else if(number.length<=9){
    result2="*The Number is Too Shot*";
  }
  document.getElementById("number-error").innerHTML=result2

// ---------------------Pin-------------------
  const pin=document.getElementById("pin").value;
  let result3 ="";
  if (pin==="") {
    result3="*Pincode is Required*";
  } else if (isNaN(pin)){
      result3= "*Pincode is Not Valid*"
    }
  else if (pin.length<=5){
    result3="*The Pincode is Too Shot*";
  }
  document.getElementById("pin-error").innerHTML=result3

// ---------------------Address--------------------
  const address=document.getElementById("address").value;
  const patten4 = /^[1-9][0-9]{6}$/;
  let result4 ="";
  if (address==="") {
    result4="* Address is Required*";
  }
  else if (address.length<=10){
    result4="*The Address is Too Shot*";
  }
  document.getElementById("address-error").innerHTML=result4

// --------------------Mail----------------------
  const mail=document.getElementById("mail").value;
  const patten5 =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  let result5 ="";
  if (mail==="") {
    result5="*Email is Required*";
  } 
  else if (!patten5.test(mail)){
    result5= "*Email is Not Valid*"
  }
  else{
    result5="";
  }
  document.getElementById("mail-error").innerHTML=result5

// -----------------------Date----------------------
  const date=document.getElementById("date").value;
  let result6 ="";
  if (date==="") {
    result6="* Date of Birth is Required*";
  } 
  else{
    result6="";
  }
  document.getElementById("date-error").innerHTML=result6

// --------------------City--------------------
  const city=document.getElementById("city").value;
  const patten7 = /^[a-zA-Z]+$/;
  let result7 ="";
  if (city==="") {
    result7="* City is Required*";
  } 
  else if (!patten7.test(city)){
    result7= "*City is Not Valid*"
  }
  else if (city.length<=2){
    result7="*The City Name is too shot*";
  }
  document.getElementById("city-error").innerHTML=result7

// -------------------------State---------------------
  const state=document.getElementById("state").value;
  const patten8 = /^[a-zA-Z]+$/;
  let result8 ="";
  if (state==="") {
    result8="* State is Required*";
  } 
  else if (!patten8.test(state)){
    result8= "*State is Not Valid*"
  }
  else if (state.length<=2){
    result8="*State Name is too shot*";
  }
  document.getElementById("state-error").innerHTML=result8

// -----------------------country-------------------------
  const country=document.getElementById("country").value;
  const patten9 =/^[a-zA-Z]*$/;
  let result9 ="";
  if (country==="") {
    result9="* Country is Required*";
  } 
  else if (!patten9.test(country)){
    result9= "*Country is Not Valid*"
  }
  else if (country.length<=2){
    result9="*The Country Name is too shot*";
  }
  document.getElementById("country-error").innerHTML=result9

// ------------------------file---------------------
  const fileInput = document.getElementById("file");
  let result10 = "";

  if (fileInput.files.length === 0) {
    result10 = "*File is Required*";
  } else if (fileInput.files[0].size > 10240) { 
  result10 = "*The size of the File is Too Big*";
  } else {
  result10 = "";
  }
  document.getElementById("file-error").innerHTML = result10;

// ---------------------age----------------------
  const ageSelect = document.getElementById("age");
  let value = ageSelect.value; 
  let result11="";
  if (value === "select") {
    result11="*The Age is Required*"
  } else {
    result11=""
  }
  document.getElementById("age-error").innerHTML = result11; 

// ------------------------gender---------------------
  if (document.getElementById('male').checked) {
    document.getElementById("gender-error").innerHTML = ''; 
  } else if (document.getElementById('female').checked) {
    document.getElementById("gender-error").innerHTML = '';
  } else {
    document.getElementById("gender-error").innerHTML = '*Gender is Required*'; 
  } 
    
}








