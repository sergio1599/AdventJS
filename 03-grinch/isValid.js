
//const cadena = "bici coche (balón) bici coche peluche"; 
const cadena = "(muñeca) consola bici"; 
//const cadena = "bici coche (balón bici coche"; 



function isValid(letter){
    
    if( letter.includes("{") || letter.includes("}") || letter.includes("[") || letter.includes("]") || letter.includes("()")  ){
        return false; 
    }else if( letter.includes("(") && letter.includes(")") ){
        return true
    }
    return false
   
}

const validation = isValid(cadena); 

console.log(validation)