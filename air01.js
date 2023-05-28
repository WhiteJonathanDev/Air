const arg = process.argv[2]
const separator = process.argv[3]
const list = arg.split(' ')

const cutString = (list, separator) => {
    const finalList = []
    const index = list.findIndex(el => el === separator)
    for (let i = 0; i < list.length; i++) {
        if (index !== i) {
            finalList.push(list[i])
        }
    }
    return finalList
}

if (process.argv.length !== 4) {
    console.log('error')
    process.exit()

} else {
    console.log(cutString(list, separator))
}
