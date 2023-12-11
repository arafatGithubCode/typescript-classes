const printTodos = (todos: string[] | null) => {
  //null typeof = obj & string[] = obg
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("No todos");
  }
};

const todos = ["todo1", "todo2"];
printTodos(null);

let firstName: string;
let lastName: typeof firstName;
lastName = "12";
