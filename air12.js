const buildList = () => {
    const array = []
    for (let i = 2; i < process.argv.length; i++) {
        array.push(process.argv[i] * 1)
    }
    return array
}

const myQuickSort = (array) => {
    if (array.length < 2) {
        return array
    }
    let pivot = array[array.length - 1 ]
    let array1 = []
    let array2 = []
    for (let i = 0; i < array.length - 1 ; i++) {
        array[i] < pivot ? array1.push(array[i]) :  array2.push(array[i])
    }
    return [...myQuickSort(array1), pivot, ...myQuickSort(array2)]
}

const list = buildList()
if (!list.length) {
    process.exit()
} else {
    console.log(myQuickSort(list))
}