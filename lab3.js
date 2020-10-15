const CustomerService = require('./services/CustomerService');
const service = new CustomerService();
const { findAllV1, findAllV2 } = new CustomerService();
const { log } = console;

async function startApp() {
    log(`Use callback`);  
    findAllV1(response => log(response));
    
    log(`Use then ables to grab result`);
    //Use then ables to grab result
    findAllV2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('done'))


     //use async and wait key word , refactor previous code.
     try {
        log(`use async and wait key word , refactor previous code`);
        const customer = await findAllV2();        
        log(customer);

    } catch (err) {

    }
    finally {

    }
}
startApp();