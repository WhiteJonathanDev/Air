const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length; i++) {
        array.push(process.argv[i])
    }
    return array
}

const rotateArray = (array) => {
    let newArray = []
    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i])
    }
    newArray.push(array[0])
    return newArray
}

const list = buildList()
if (!list.length) {
    console.log('error')
    process.exit()
} else {
    console.log(rotateArray(list))
}