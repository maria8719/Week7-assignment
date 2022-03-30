import { add, total, highestScore, factorial, todosList, addTodo, removeTodo, updateTodos } from './App';

// https://jestjs.io/docs/expect#expectvalue
// The expect function is used every time you want to test a value.

/*
  toBe compares two values for equality.
      https://jestjs.io/docs/expect#tobevalue
  toBeNull matches only null
      https://jestjs.io/docs/expect#tobenull
  toBeUndefined matches only undefined
      https://jestjs.io/docs/expect#tobeundefined
  toBeDefined is the opposite of toBeUndefined
      https://jestjs.io/docs/expect#tobedefined
  toBeTruthy matches anything that an if statement treats as true
      https://jestjs.io/docs/expect#tobetruthy
  toBeFalsy matches anything that an if statement treats as false
      https://jestjs.io/docs/expect#tobefalsy
*/


// Unit test - only tests one thing
// test add function
test('add - if function defined?', () => {
  expect(add).toBeDefined(); 
});

// test add function
test('add - is function returning a value?', () => {
  expect(add(1, 2)).toBeDefined();
});

// test add function
test('add - verify correct return values', () => {
  expect(add(1, 2)).toBe(3); // function returns 3; toBe is a matcher (===)
  expect(add(5, 2)).toBe(7);
});

// test highestScore function
test('highest score', () => { 
  const students = [
    { name: 'Shane Carey', score: 9.5 },
    { name: 'Rebecca Mills', score: 8.7 },
    { name: 'Derek Myers', score: 9.1 },
  ];
  const result = highestScore(students);
  expect(result).toEqual({ name: 'Shane Carey', score: 9.5 });
});

// test factorial function

test('factorial number: verify correct return values',()=>{
    
     expect(factorial(1)).toBe(1);
     expect(factorial(3)).toBe(6);
});


// Integration test - testing a function that relies on another function (multiple things)
//  - testing add() then total() function
//  - benefit of more detailed function testing
test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(total(2, 10)).toBe('$12');
  expect(total(8, 50)).toBe('$58');
});

// *********************************************************** Week7 assignment ****************************************************************


// test todosList function
test('todosList - if function defined?', () => {
  expect(todosList).toBeDefined(); 
});

// test todosList function
test('todosList - is function returning a value?', () => {
  expect(todosList()).toBeDefined();
});

// test todosList function
test('todosList - verify correct return values', () => {
  
  const FinalResult = [{id: 1, text: "React Hooks in Depth", isCompleted: false},
                       {id: 2, text: "Write Articles @ Medium", isCompleted: false},
                       {id: 3, text: "Share article at Reddit",  isCompleted: false},
  
                       ];
  expect(todosList()).toEqual(FinalResult);
      
});

  // ********************************************************************************

// test addTodo function
test('addTodo - if function defined?', () => {
  expect(addTodo).toBeDefined(); 
});

// test addTodo function

test('addTodo - is function returning a value?', () => {
  expect(addTodo(5, "Do homework")).toBeDefined();
});

// test addTodo function
test('addTodo - verify correct return values', () => {

const result = [{id: 1, text: "React Hooks in Depth", isCompleted: false},
                {id: 2, text: "Write Articles @ Medium", isCompleted: false},
                {id: 3, text: "Share article at Reddit",  isCompleted: false},
                {id: 4, text: "Learning React JS", isCompleted: false }
               ];
 expect(addTodo(4,"Learning React JS")).toEqual(result);

});

// ********************************************************************************

// test removeTodo function
test('removeTodo - if function defined?', () => {
  expect(removeTodo).toBeDefined(); 
}); 

// test removeTodo function
test('removeTodo - is function returning a value?', () => {
  expect(removeTodo(3)).toBeDefined();
});

// test removeTodo function
test('removeTodo - verify correct return values', () => {
  const result = [
    {id: 1, text: "React Hooks in Depth", isCompleted: false},
    {id: 2, text: "Write Articles @ Medium", isCompleted: false}    
    ]
     expect(removeTodo(3)).toEqual(result);
    
  });

// ********************************************************************************

  // test updateTodos function
test('updateTodos - if function defined?', () => {
  expect(updateTodos).toBeDefined(); 
});

// test updateTodos function
test('updateTodos - is function returning a value?', () => {
  expect(updateTodos()).toBeDefined();
});

// test updateTodos function
test('updateTodos - verify correct return values', () => {
  const expectedResult = [{id: 1, text: "React Hooks in Depth", isCompleted: true},
                          {id: 2, text: "Write Articles @ Medium", isCompleted: true},
                          {id: 3,text: "Share article at Reddit",  isCompleted: true}
                         ];
     expect(updateTodos()).toEqual(expectedResult);
      });