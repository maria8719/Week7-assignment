export const add = (value1, value2) => { 
    return value1 + value2;
};

export const total = (shipping, subTotal) => {
    return '$' + add(shipping, subTotal);
};

export function highestScore(students) {
    let result = null;
    let highScore = 0;
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.score > highScore) {
        highScore = student.score;
        result = student;
      }
    }
  
    return result;
  }

  export function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }

  // *******************************************************************Week 7 assignment*********************************************************

 const todos = [{
    id: 1,
    text: "React Hooks in Depth",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Write Articles @ Medium",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Share article at Reddit",
    isCompleted: false,
  }];

// This function returns the todos list

export function todosList(){

  return todos;
  }


// This function add a todo to a todos list

export function addTodo (id, text) {
  let newTodoItems = [...todos];
  let todo = {id: id,text:text,isCompleted:false};        
  newTodoItems.push(todo);
  return newTodoItems;
} 

// This function remove a todo to a todos list

export function removeTodo(id){

  const newTodoItems = [...todos];
  const index = newTodoItems.findIndex((todo) => todo.id === id);
  newTodoItems.splice(index, 1); 
  return newTodoItems;
}

// This function makes all the "isCompleted" property of all objects true.

export function updateTodos(){
  
  todos.forEach(function(e){
    e.isCompleted=true;
    })
     return todos;

}



