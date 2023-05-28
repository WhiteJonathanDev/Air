const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length; i++) {
        array.push(process.argv[i])
    }
    return array
}

const sortedFusion = (array1, array2) => {
    const finalArray = []
    for (let i = 0; i < array1.length; i++) {
        finalArray.push(array1[i] * 1)
    }
    for (let i = 0; i < array2.length; i++) {
        finalArray.push(array2[i] * 1)
    }
    for (let i = 0; i < finalArray.length; i++) {
        for (let j = 0; j < finalArray.length - 1 - i; j++) {
            if (finalArray[j] > finalArray[j + 1]) {
                const temp = finalArray[j]
                finalArray[j] = finalArray[j + 1]
                finalArray[j + 1] = temp
            }
        }
    }
    return finalArray
}


const list = buildList()
if (!list.length || !list.some(el => el === 'fusion')) {
    console.log('error')
    process.exit()
} else {
    const list = buildList()
    const index = list.indexOf('fusion')
    const array1 = []
    const array2 = []
    for (let i = 0; i < index; i++) {
        array1.push(list[i])
    }
    for (let i = index + 1; i < list.length; i++) {
        array2.push(list[i])
    }
    console.log(sortedFusion(array1, array2))
}