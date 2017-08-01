const fs = require('fs');
const path = require('path');

module.exports = function readDir(dirname, fileExtension, callback){
                    fs.readdir(dirname,(err,list)=>{
                        if (err){
                           callback(err);
                        }else{
                            callback(null,list.filter(item=> path.extname(item).match('.' + fileExtension)));


}})
}