let celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

celsius.addEventListener("input",()=>{
  if (!isNaN(celsius.value)){
    let x = parseFloat(celsius.value) 
    Fahrenheit.value = (x * (9 / 5) + 32).toFixed(2);
    Kelvin.value = (x + 273.15).toFixed(2);
    if(celsius.value===""){
      Fahrenheit.value="";
      Kelvin.value="";
    }
  }

})

//Reset Function
function Reset(){
  celsius.value = "";
  Fahrenheit.value = "";
  Kelvin.value = "";
}

// Fahrenheit to Celsius and   Kelvin
Fahrenheit.addEventListener("input", () => {
  if (!isNaN(Fahrenheit.value)) {
    let y = parseFloat(Fahrenheit.value)
    celsius.value = ((y - 32) * (5 / 9)).toFixed(2);
    Kelvin.value = ((y - 32) * (5 / 9) + 273.15).toFixed(2);
    if (Fahrenheit.value === "") {
      celsius.value = "";
      Kelvin.value = "";
    }
  }
})
//Kelvin to celsius and Fahrenheit
Kelvin.addEventListener("input", () => {
  if (!isNaN(Kelvin.value)) {
    let z = parseFloat(Kelvin.value)
    celsius.value = (z - 273.15).toFixed(2);
    Fahrenheit.value = ((z-273.15) * (9 / 5) + 32).toFixed(2);
    if (Kelvin.value === "") {
      celsius.value = "";
      Fahrenheit.value = "";
    }
  }
})
