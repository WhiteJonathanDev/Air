const arg = process.argv[2]
let string = ''

for (let i = 0; i < arg.length; i++) {
    if (arg[i - 1] !== arg[i]) {
        string += arg[i]
    }
}
console.log(string)
