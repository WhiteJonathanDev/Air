const letter = process.argv[2]
const rows = process.argv[3] * 1

buildStairs = () => {
    for (let i = 1; i < rows + 1; i++) {
        const spaces = ' '.repeat(rows - i)
        const o = letter.repeat(2 * i - 1)
        console.log(spaces + o)
    }
}

if (process.argv.length !== 4 || isNaN(rows)) {
    console.log('error')
    process.exit(1)
} else {
    buildStairs()
}