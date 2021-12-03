
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]


function contarOvejas(ovejas) {

  //const find = ovejas.filter(oveja => oveja.color === 'rojo').filter(oveja => oveja.name.includes('N') && oveja.name.includes('a')); 
  const find = ovejas.filter(oveja => oveja.color === 'rojo' && oveja.name.includes('N') && oveja.name.includes('a') 
  || oveja.name.includes('n') && oveja.name.includes('A')); 

  return find
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);