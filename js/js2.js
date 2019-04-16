const EURO=0.88507;
var dolar;

var cantidad = prompt("Introduce la cantidad de euros a convertir a dolares: ");
if (cantidad!==0){
    dolar = cantidad/EURO;
}
document.write("El valor de " + cantidad + "€ en dolares es " + dolar);