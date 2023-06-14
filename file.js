const fs = require('fs');
// // reading files with fs is an ascyhronous process
// fs.readFile('./sometext.txt', (err,data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last');

// write file (asychronous), creates new file if file not present
// fs.writeFile('./sometext2.txt','good day', () =>{
// conssole.log('file was written');
// });

// directories
// if(!fs.existsSync('./assets1')){
// fs.mkdir('./assets1', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder created');
// })
// }
// else{
//     fs.rmdir('./assets1', (err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log('folder deleted');
// }

// deleting files
if(fs.existsSync('./deleted.txt')){
    fs.unlink('./deleted.txt', (err)=> {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}