const stringToCompare = process.argv[process.argv.length - 1]
const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length - 1; i++) {
        array.push(process.argv[i])
    }
    return array
}

const removeFromArray = (array, stringToCompare) => {
    const finalArray= []
    array.forEach(el => {
        if (!el.toLowerCase().includes(stringToCompare)) {
            finalArray.push(el)
        }
    })
    return finalArray
}

const list = buildList()
if (!list.length) {
    console.log('error')
    process.exit()
} else {
    console.log(removeFromArray(list, stringToCompare))
}