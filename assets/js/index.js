const multiplicacion = () => {
    const numUser = parseInt (prompt("Ingrese un número entre 1 y 20"));
    if (numUser > 20){
        alert ("Número fuera del rango");
        location.reload();
        return;
    } 
    let multiplication;
    for (let i = 1; i <= numUser; i++) {
      multiplication = numUser * i;
      console.log(numUser + "x" + i + "=" + multiplication);
    }
  
    let numIngresado = 1; 
    for (let x = 1; x <= numUser; x++) {
      numIngresado = numIngresado * i;
      console.log("Factorial de " + x + " " + "=" + " "  + numIngresado);
    }
  
  };
  multiplicacion();








/*const pedirNum = () =>{
    const numUser = parseInt (prompt("Ingrese un número entre 1 y 20,"));
    if (numUser > 20){
        alert ("Número fuera del rango");
        return;
    } 
    for(let i= 1; i <= numUser; i++){
      console.log(numUser + "x " + i + "= " + numUser * i);
    }
    for (let x = 0; x < numUser; x++) {
        t = 1
        factorial = t * (numUser - x);
        console.log("El factorial de" + " " + x + "es" + t * (numUser - x) * numUser );
        console.log(factorial);
      }
}
pedirNum();*/


