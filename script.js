let toDos=[];
let userInput;

$('.addNew').click(function() {
    userInput=$(".newToDo").val();
    toDos.push(userInput);
    $(".ToDoList").append("<li>"+userInput+"</li>");
    $(".numTaks").text(toDos.length);
    
});
 

