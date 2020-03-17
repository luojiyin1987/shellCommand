const os = require('os');
const fs = require('fs');
function _cd(dir) {
    if(!dir) dir = os.homedir();

    if(dir === '-') {
        if(!process.env.OLDPWD) {
            console.log('can not find previous directory');
        }else{
            dir = process.env.OLDPWD;
        }
    }

    try{
        const curDir = process.cwd();
        console.log('dir', dir);
        console.log("curDir", curDir);
        process.chdir(dir);
        process.env.OLDPWD = curDir;
    } catch(e) {
        let  err;
        try  {
            statFollowLinks(dir);
            err = 'not a directory: ' + dir;
        }catch(e2){
            err = 'no such file or directory: ' + dir;
        }
        if(err) console.log(err);
    }
    return '';
}

function statFollowLinks(){
    return fs.statSync.apply(fs, arguments);
}

const args = process.argv
const dir = args[2];

console.log("args", args);
_cd([],dir);