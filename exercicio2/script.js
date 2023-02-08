const soma = (num1, num2) => {
    return console.log(num1 + num2)
}

soma(3, 2)

const maior = (num1, num2) => {
    return console.log(num1 > num2)
}

maior(3, 2)

const numPar = (num) => {
    const resp = num % 2
    return console.log(resp === 0)
}

numPar(3)

const string = (string,) => {
    const sTRING = string.toUpperCase()
    return console.log(sTRING, string.length)
}

string ("Jay Govinda")