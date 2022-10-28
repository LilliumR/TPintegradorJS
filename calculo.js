const valor = 200;
let estudiante = 0.80;
let trainee = 0.50;
let junior = 0.15;
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail  = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
function importe() {
  let total = (cantidad.value) * valor;
  if (categoria.value == 0) 
     { total = total; } 
        else 
          {if (categoria.value == 1) {total = total - (estudiante * total);} 
            else 
              { if (categoria.value == 2) {total = total - (trainee * total); }
                 else 
                  { if (categoria.value == 3) {total = total - (junior  * total);} 
                } }}
        totalPago.innerHTML = total;
    }
function reset_importe() {
      totalPago.innerHTML = "";
}
Resumen.addEventListener('click', importe);
Borrar.addEventListener('click', reset_importe);
