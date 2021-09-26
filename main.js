

var saveButton = $(".save-button");

var todoInputOne = $(".todo-one")
var todoInputTwo = $(".todo-two")
var todoInputThree = $(".todo-three")
var todoInputFour = $(".todo-four")
var todoInputFive = $(".todo-five")
var todoInputSix = $(".todo-six")
var todoInputSeven = $(".todo-seven")
var todoInputEight = $(".todo-eight")
var todoInputNine = $(".todo-nine")
var todoInputTen = $(".todo-ten")
var todoInputEleven = $(".todo-eleven")
var todoInputTwelve = $(".todo-twelve")
var todoInputThirteen = $(".todo-thirteen")

var todoInputArray = [
    todoInputOne,
    todoInputTwo,
    todoInputThree,
    todoInputFour,
    todoInputFive,
    todoInputSix,
    todoInputSeven,
    todoInputEight,
    todoInputNine,
    todoInputTen,
    todoInputEleven,
    todoInputTwelve,
    todoInputThirteen
]

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM do"))

function init() {
    var todoStorageArray = JSON.parse(localStorage.getItem("todo array"));
    console.log(todoStorageArray)
    for (var i = 0; i < todoStorageArray.length; i++) {
   
        
    }
    
     
}

init();

function saveTodos() {
    var savedTodoOne = todoInputOne.val()
    var savedTodoTwo = todoInputTwo.val()
    var savedTodoThree = todoInputThree.val()
    var savedTodoFour = todoInputFour.val()
    var savedTodoFive = todoInputFive.val()
    var savedTodoSix = todoInputSix.val()
    var savedTodoSeven = todoInputSeven.val()
    var savedTodoEight = todoInputEight.val()
    var savedTodoNine = todoInputNine.val()
    var savedTodoTen = todoInputTen.val()
    var savedTodoEleven = todoInputEleven.val()
    var savedTodoTwelve = todoInputTwelve.val()
    var savedTodoThirteen = todoInputThirteen.val()

    var todoSavedArray = 
        [savedTodoOne, 
        savedTodoTwo, 
        savedTodoThree,
        savedTodoFour,
        savedTodoFive,
        savedTodoSix,
        savedTodoSeven,
        savedTodoEight,
        savedTodoNine,
        savedTodoTen,
        savedTodoEleven,
        savedTodoTwelve,
        savedTodoThirteen   
        ]

    console.log(todoSavedArray)
    localStorage.setItem("todo array", JSON.stringify(todoSavedArray));
}

function renderTodos() {
    for (var i = 0; i < todoArray.length; i++) {

    }
}

saveButton.on('click', function() {
    console.log(todoInputOne.val())
    saveTodos();
})



