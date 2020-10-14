const ToDoService = require('./services/ToDoService');
const service = new ToDoService();
const { findAll,save,update,remove } = new ToDoService();

function startApp() {  
   findAll();   
   save({userId: 10, id: 201, title: "numquam repellendus a magnam",completed: true});   
   update({userId: 10,   id: 201,  title: "changed",  completed: false});    
   remove(201); 
}
startApp();