const { start } = require('repl')
const FileService = require('./services/FileService')

const fileService = new FileService();

async function readOperation() {
    fileService.readFileV1((response) => {
        console.log(response);
    });
    //
    fileService.readFileV2()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    try {
        const fileData = await fileService.readFileV2();
        console.log(fileData)
    } catch (err) {
        console.log(err)
    }
}
async function writeOperation(data) {
    try {
        const status = await fileService.writeFile(data);
        console.log(status)
    } catch (err) {
        console.log(err)
    }
}

async function writeOperationJson(data) {
    try {
        const status = await fileService.writeFileJson(data);
        console.log(status)
    } catch (err) {
        console.log(err)
    }
}


async function startApp() {
    //readOperation()
   // writeOperation('Hello,Node io')
   writeOperationJson({ id:1,firstName:'Adrita',lastName:'Bhaumik' , address:{city:'delhi',state:'Delho'},isActive:true});
}
startApp();