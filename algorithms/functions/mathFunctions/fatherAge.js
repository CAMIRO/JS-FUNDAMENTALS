// Determine the age of the father when the  has double it or if hasnt, when it will do it.


function ageCalculator(ageFather, ageSon) {
    const doubleAgeSon = ageSon * 2
    let menssage = ''

    if(doubleAgeSon < ageFather){

        menssage = `father was ${doubleAgeSon} years`

    } else {
        const remain = doubleAgeSon - ageFather
        menssage = `father needs ${remain} years to be double his son's`
    }
    
    return menssage
}



console.log(ageCalculator(5,4));