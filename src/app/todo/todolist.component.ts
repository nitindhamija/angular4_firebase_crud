import {Component,OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import {Router } from '@angular/router';

@Component({
    selector:'todo-list',
  templateUrl:'./todolist.component.html',

  // host: { '[@fadeInAnimation]': '' },

  providers:[TodoService]
})

export class TodoListComponent {
  todolist:any[];
    todolist_bck:any[];
newTodo: Todo = new Todo();
status: boolean;
flag:String='ALL';
todostatus = [
     'ALL',
     'ACTIVE',
     'COMPLETE'
  ];
  constructor(private _router:Router,private _service:TodoService){
    this.status=false;
           if(_router.url.indexOf('active')>-1)
         this.status=true;

  }
  ngOnInit(){
  this.gettodoList();
  }
gettodoList(){
    this._service.getTodoList().subscribe(todolist=>{this.todolist=todolist,

      this.todolist_bck = this.todolist.map(x => Object.assign({}, x));
    });


}
    addTodo() {
      console.log(this.newTodo);
    this._service.addTodo(this.newTodo).subscribe(todo=>
      {
          this.todolist.push(todo);
          this.todolist_bck.push(todo);
          this.updatetodo();
      });
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
   this._service.deleteTodoById(todo.id);
   this.todolist.splice(this.todolist.indexOf(todo),1);
   this.todolist_bck.splice(this.todolist_bck.indexOf(todo),1);
  }

markComplete(event,todo: Todo){

  console.log(todo.id,event.target.checked);

   let todo_bck =  this.todolist_bck.find(x => x.id == todo.id);

  if(event.target.checked){
  todo.status='Completed';
  todo_bck.status='Completed';}
  else{
  todo.status='pending';
  todo_bck.status='pending';}

  this.updatetodomarkup();
this._service.markComplete(todo,event.target.checked);
}

updatetodo(){
  console.log(this.flag);

  this.todolist = this.todolist_bck.map(x => Object.assign({}, x));
  if(this.flag == 'COMPLETE' ){
    this.todolist = this.todolist.filter(todo => todo.status.indexOf('Completed')>-1);
  } else if( this.flag == 'ACTIVE'){
    this.todolist = this.todolist.filter(todo => todo.status.indexOf('pending')>-1);
  }
   else {
     this.todolist =   this.todolist;
   }
}
updatetodomarkup(){
  if(this.flag == 'COMPLETE' ){
    this.todolist = this.todolist.filter(todo => todo.status.indexOf('Completed')>-1);
  } else if( this.flag == 'ACTIVE'){
    this.todolist = this.todolist.filter(todo => todo.status.indexOf('pending')>-1);
  }
   else {
     this.todolist =   this.todolist;
   }
}

}
