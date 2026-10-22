console.log("Escribiendo los fundamentos de JavaScript");
//funcion contador de vocales
const vocales = () => {
    let palabra = "parangaricutirimicuaro";
    let vocales = "aeiou";
    conteo = 0;
    for (letra of palabra){
        //console.log(letra);
        
        if (vocales.includes(letra)){   
            conteo++
            
    }
}
console.log("la palabra fue", palabra);
console.log("El total de vocales fueron", conteo);

}

vocales();