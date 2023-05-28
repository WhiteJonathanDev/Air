const newElement = process.argv[process.argv.length - 1] * 1
const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length - 1; i++) {
        array.push(process.argv[i] * 1)
    }
    return array
}

const findIndexToInsert = () => {
    return list.findIndex(el => el >= newElement)
}

const sortedInsert = (array, newElement) => {
    const finalArray= []
    let index = findIndexToInsert()
    for (let i = 0; i < index; i++) {
        finalArray.push(list[i])
    }
    finalArray.push(newElement)
    for (let i = index; i < list.length; i++) {
        finalArray.push(list[i])
    }
    return finalArray
}

const list = buildList()
if (!list.length || list.some(el => isNaN(el))) {
    console.log('error')
    process.exit()
} else {
    console.log(sortedInsert(list, newElement))
}