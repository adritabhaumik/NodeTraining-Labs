
const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

broker.createService({
    name: 'calculater',
    actions: {
        //all biz methods goes here
        add(ctx) {
            //const name = ctx.params.name;
            const { n1, n2 } = ctx.params;
            
            return `Value of  ${n1} + ${n2}=${n1+n2}`;
        }
    }
});

async function startApp() {
    try {
        await broker.start();
        const hello = await broker.call('calculater.add', { n1: 10, n2: 20 })
        console.log(hello);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();