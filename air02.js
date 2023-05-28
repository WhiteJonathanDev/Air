const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length; i++) {
        array.push(process.argv[i])
    }
    return array
}

const buildString = (list, separator) => {
    let string = ''
    for (let i = 0; i < list.length - 1; i++) {
        string += list[i]
        if (i < list.length - 2) {
            string += separator
        }
    }
    return string
}

const list = buildList()
const separator = list[list.length - 1]
console.log(buildString(list, separator))
