const CUSTOMERS = require('../mock-data/Customer')
class CustomerService {
    constructor(){
        console.log('Customer service is called!!!')
    }
    findAllV1(handler){
        for(let val of CUSTOMERS) {
            console.log(val)
        }
        setTimeout(handler, 1000, CUSTOMERS);       
    }


 findAllV2() {
        return new Promise((resolve, reject) => {
            //wrap existing callbacks inside promise,so other developer use only promise.
            setTimeout(resolve, 1000, CUSTOMERS);
        });
    }
}
module.exports = CustomerService;
