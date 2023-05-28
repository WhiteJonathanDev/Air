const operator = process.argv[process.argv.length - 1].charAt(0)
const operationNumber = process.argv[process.argv.length - 1].slice(1) * 1
const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length - 1; i++) {
        array.push(process.argv[i] * 1)
    }
    return array
}
const calculate = () => {
    let array= []
    for (let i = 0; i < list.length; i++) {
        let number = list[i]
        if (operator.charAt(0) === '+') {
            number = list[i] + operationNumber
        } else {
            number = list[i] - operationNumber
        }
        array.push(number)
    }
    return array
}

const list = buildList()
if (list.some(el => isNaN(el)) || (operator !== '+' && operator !== '-')) {
    console.log('error')
    process.exit()
} else {
    console.log(calculate())
}