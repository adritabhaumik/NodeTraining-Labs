const TODOS = require('../mock-data/TODO')

class ToDoService {
    constructor(){
        console.log('order service is called!!!')
    }
    findAll(){
        for(let val of TODOS) {
            console.log(val)
        }
    }

    save(todo)
    {       
        TODOS.push (todo);        
        console.log('todo has been saved');
        console.log(todo);
    }

    update(todoObj)
    {      
        const i = TODOS.findIndex(_item => _item.id === todoObj.id);
        if (i > -1) 
        {
            TODOS[i] = todoObj;        
            console.log('todo has been updated' );
            console.log(todoObj );
        }
    }
    remove(id)
    {      
        const i = TODOS.findIndex(_item => _item.id === id);        
        if (i > -1) 
        {
            TODOS.splice(i,1);
            console.log('todo has been removed todo id>>'+id);
        }
    }
}

module.exports = ToDoService;