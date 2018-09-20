var fs = require('fs');
const dir_name = './garbage';
var file_name = '';

function make_garbage(){
try {    
        if (!fs.existsSync(dir_name)) {
            
            fs.mkdirSync(dir_name);
        }
        else {
            let files = fs.readdirSync(dir_name);
            for (let i = 1; i< files.length; i++){
                fs.unlinkSync(dir_name + '/' + files[i]);
            }   
        }
        
        if (isNaN(process.argv[2]) && process.argv[2]) 
            throw "Error: Critical failure";
            //console.log("Put in a number parameter");  
        else {
            for (let i = 1; i <= process.argv[2]; i++) {
                fs.openSync(`${dir_name}/${i}`, 'w', function (err, file) {
                });
            console.log("Created file " + i);    
            }
        }
    }           
catch (err) {
    console.log(err);
}
    console.log('Done');
}

make_garbage();