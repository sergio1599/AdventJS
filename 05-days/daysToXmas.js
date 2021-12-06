

const day = new Date('Jan 1, 2022 00:00:01'); 


function daystoXmas(date){

    const reference = new Date('Dec 25, 2021'); 
   
    const res = reference-date 
    const days = Math.ceil(res/(1000*3600*24)); 
    
    return days; 

}


const xmas = (daystoXmas(day)); 

console.log(xmas); 