var fs = require('fs');
var file = process.argv[2];
function copy_file(){
    try {    

        // fs.access(file, fs.constants.F_OK, (err) => {
        //     if (err) throw "Error: Critical failure";
        //     else {
                fs.copyFile(process.argv[2], process.argv[3], err => {
                if (err) {
                    console.log("Error: Critical failure");
                    //throw "Error: Critical failure";
                    return -1;
                }    
                else  
                    console.log('first file was copied to second file');
                });
            }
        //});

            
    catch (err) {
        console.log(err);
    }
}
copy_file();