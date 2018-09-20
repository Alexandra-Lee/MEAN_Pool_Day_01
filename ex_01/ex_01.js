for(let i = 2; i < process.argv.length; i++){
    if (!isNaN(process.argv[i])) {
        console.log(process.argv[i])
    }
}
