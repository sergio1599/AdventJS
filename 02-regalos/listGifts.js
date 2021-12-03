const carta = 'bici coche balón _playstation bici coche peluche'; 

function listGits(letter){

    const arr = letter.split(' '); 
    
    const result = arr.filter(arr => !arr.includes('_') && !arr ==' '); 

    const cantidad = result.reduce((contador, letter)=>{
        contador[letter] = (contador[letter] || 0) + 1; 
        return contador; 
    }, {}); 

    return cantidad; 
    
}


const regalos = listGits(carta); 

console.log(regalos); 