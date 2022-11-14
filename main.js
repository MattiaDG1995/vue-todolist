var app = new Vue({
    el: '#root',
    data: {
        testo: '',
        todoList: [],
        todoDone: [],
    },
    beforeUpdate(){
        this.todoList.forEach((elem)=>{
            if(elem.done == true){
                this.todoDone.push( elem );
                this.todoList.splice(elem, 1);
            }
        });
    },

    methods: {
        rimuoviElemento(index){
            this.todoList.splice( index, 1);
        },     
        
        todoCompleted(index, elem){
            if( elem.done == false){
                elem.done = true;
    
            }else{
                elem.done = false;
            }
        },
        
        addText(){
            let add = {
                testo: this.testo,
                done: false
            }
            this.todoList.push(add);
            this.testo= '';
        }
    }

    
})