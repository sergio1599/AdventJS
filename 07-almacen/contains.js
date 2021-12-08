const almacen = {
    'estanteria1': {
        'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
        }
    },
    'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
        }
    }
}

const otroAlmacen = {
    'baul': {
        'fondo': {
            'objeto': 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando'
        }
    }
}

function contains(store, product) {

    const values = Object.values(store);
    //console.log(values)

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === 'string' && values[i] === product) {
            return true
        }

        if (typeof values[i] === 'object') {
            let found = contains(values[i], product);
            if (found) {
                return found;
            }
        }
    }

    return false
}

const resp = contains(otroAlmacen, 'camiseta');

console.log(resp)
