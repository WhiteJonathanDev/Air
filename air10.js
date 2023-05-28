let filename =  process.argv[2]

if (process.argv.length !== 3) {
    console.log('error')
    process.exit(1)
} else {
    const fs = require('fs')
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log('error')
            process.exit(1)
            throw err;
        }
        console.log(data)
    })
}


