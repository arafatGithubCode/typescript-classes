var printTodos = function (todos) {
    //null typeof = obj & string[] = obg
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("No todos");
    }
};
var todos = ["todo1", "todo2"];
printTodos(null);
var firstName;
var lastName;
lastName = "12";
