const filesData = [
    {
        fileName: 'air00.js',
        args: '"Bonjour les copains"',
        expectedOutput: "[ 'Bonjour', 'les', 'copains' ]"
    },
    {
        fileName: 'air01.js',
        args: "'Crevette magique dans la mer des étoiles' 'la'",
        expectedOutput: "[ 'Crevette', 'magique', 'dans', 'mer', 'des', 'étoiles' ]"
    },
    {
        fileName: 'air02.js',
        args: "'je' 'teste' 'des' 'trucs' ' '",
        expectedOutput: 'je teste des trucs'
    },
    {
        fileName: 'air03.js',
        args: 'bonjour monsieur bonjour',
        expectedOutput: 'monsieur'
    },
    {
        fileName: 'air04.js',
        args: '"Hello milady,   bien ou quoi ??"',
        expectedOutput: 'Helo milady, bien ou quoi ?'
    },
    {
        fileName: 'air05.js',
        args: "1 2 3 4 5 '+2'",
        expectedOutput: '[ 3, 4, 5, 6, 7 ]'
    },
    {
        fileName: 'air06.js',
        args: "'Michel' 'Albert' 'Thérèse' 'Benoit' 't'",
        expectedOutput: "[ 'Michel' ]"
    },
    {
        fileName: 'air07.js',
        args: "'1' '3' '4' '2'",
        expectedOutput: "[ 1, 2, 3, 4 ]"
    },
    {
        fileName: 'air08.js',
        args: "10 20 30 fusion 15 25 35",
        expectedOutput: "[ 10, 15, 20, 25, 30, 35 ]"
    },
    {
        fileName: 'air09.js',
        args: "'Michel' 'Albert' 'Thérèse' 'Benoit'",
        expectedOutput: "[ 'Albert', 'Thérèse', 'Benoit', 'Michel' ]"
    },
    {
        fileName: 'air10.js',
        args: 'text.txt',
        expectedOutput: 'Je danse le mia'
    },
    {
        fileName: 'air11.js',
        args: 'O 5',
        expectedOutput:
            '    O\n' +
            '   OOO\n' +
            '  OOOOO\n' +
            ' OOOOOOO\n' +
            'OOOOOOOOO'
    },
    {
        fileName: 'air12.js',
        args: '6 5 4 3 2 1',
        expectedOutput: '[ 1, 2, 3, 4, 5, 6 ]'
    }
]
let errorCount = 0
const checkIfFileExist = (fileName) => {
    const fs = require('fs')
    return fs.existsSync(fileName)
}

const checkFunction = (filesData) => {
    return new Promise((resolve, reject) => {
        const {exec} = require('node:child_process')
        exec(`node ${filesData.fileName} ${filesData.args}`, (error, stdout, stderr) => {
            if (stderr || stdout.trim() !== filesData.expectedOutput) {
                console.log(filesData.fileName, '(2/2) :', '\x1B[31m', 'failure', '\x1b[0m')
                errorCount++
                resolve()
            } else {
                console.log(filesData.fileName, '(2/2) :', '\x1b[32m', 'success', '\x1b[0m')
                resolve()
            }
        })
    })
}

const doing = async () => {
    for (let i = 0; i < filesData.length; i++) {
        if (!checkIfFileExist(filesData[i].fileName)) {
            console.log(filesData[i].fileName , ':' , '\x1B[31m', 'failure', '\x1b[0m')
            errorCount++
        } else {
            console.log(filesData[i].fileName , '(1/2) :' , '\x1b[32m', 'success', '\x1b[0m')
            await checkFunction(filesData[i])
        }
    }
}

doing().then(() => {
    console.log('Total success :', filesData.length * 2 - errorCount ,'/', filesData.length * 2)
})
