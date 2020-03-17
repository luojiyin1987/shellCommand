const fs = require('fs');

const args = process.argv.splice(2, process.argv.length-1);

if(args.length <1)
{
    console.log("Please select file");
    process.exit(1);
}

for(let i=0; i<args.length; i++){
    fs.readFile(args[i], (err,buf) => {
        console.log("=======> ", args[i]);
        process.stdout.write(buf)
    });
};