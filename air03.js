const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length; i++) {
        array.push(process.argv[i])
    }
    return array
}



const findIntrus = (list) => {
    let intrus = null
    const array = []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] === list[i] && i !== j) {
                array.push(list[j])
            }
        }
    }
    list.forEach(el => {
        if (!array.some(el2 => el2 === el)) {
            intrus = el
        }
    })
    return intrus
}

const list = buildList()
console.log(findIntrus(list))