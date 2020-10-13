let username='adrita';
let password='pwd';
let login = (resolve,reject) => {
    if(username==='adrita' && password==='pwd')
    {
        resolve();
    }
    else{
        reject();
    }
};
let resolve =()=> console.log("Login success");
let reject =()=>  console.log("Login failed");

login(resolve,reject);

