// Crea una funcion que encuentre todas las combinaciones de los numeros de una lista
// la lista recibira una lista de numeros enteros positivos y un vaor objectivo
// Para obtener las combinaciones solo se puede usar una bez cada elemento de la lista
// (Pero pueden existir elementos repetiods en ella)
// ejemplo: Lista = [1,5,3,2], objectivo = 6
// Soluciones: [1,5] y [1,3,2] (abas combinaciones suamn 6)
// (si no existen combinaciones, retornar una lista vacia)


function findSums(numbers, target){
    let result = []
    numbers.sort()

    // Recursive function
    const backTracking = (start, target, combination) => {

        // encontrar solucion
        if(target === 0){
            result.concat(combination)
            return
        }

        // no encontrar solucion
        if( target < 0 || start === numbers.length ) return 


        // Busqueda

        
        for (let index = start; index < numbers.length; index++) {
            if (numbers[index] === numbers[index-1]) continue
            combination.push(numbers[index])

            backTracking(index + 1, target - numbers[index], combination)

        } 
    }

    backTracking(0, target, [])


    return result
}


console.log(findSums([1,5,3,2], 6));


