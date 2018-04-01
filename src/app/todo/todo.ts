
 export class Todo {

     id: number;
     name: string;
     completed: Boolean;
     editing: Boolean;
     
     constructor(values: Object = {}) {
        Object.assign(this, values);
      }
 }

