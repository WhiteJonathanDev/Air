const arg = process.argv[2]
const separators = [' ', '\t', '\n']
let lastIndex = 0

const findIndex = (string, separators) => {
    const array = []
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < separators.length; j++) {
            if (string[i] === separators[j]) {
                array.push(i)
            }
        }
    }
    return array
}

const pushLastEl = (string) => {
    let temp = ''
    for (let k = lastIndex; k < string.length; k++) {
        temp += string[k]
    }
    return temp.trim()
}

const cutString = (string, separators) => {
    const indexes = findIndex(string, separators)
    const array = []
    for (let i = 0; i < indexes.length; i++) {
        let temp = ''
        for (let j = lastIndex; j < indexes[i]; j++) {
            temp += string[j]
        }
        lastIndex = indexes[i]
        array.push(temp.trim())
    }
    array.push(pushLastEl(string))
    return array
}



if (process.argv.length !== 3 || !isNaN(arg)) {
    console.log('error', process.argv)
    process.exit(1)
} else {
    console.log(cutString(arg, separators))
}
