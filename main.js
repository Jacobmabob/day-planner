
var expandCollapseBttn = $("#expand-collapse");

function expand() {
    $(".collapse").collapse('show');
}

function collapse() {
    $(".collapse").collapse('hide');
}

expandCollapseBttn.on('click', function(){
    if (expandCollapseBttn.text() === "Expand All") {
    expand();
    expandCollapseBttn.text('Collapse All');
    } else {
    collapse();
    expandCollapseBttn.text('Expand All');
    }
})

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

var accordionButtonArray = $(".accordion-button");

var expandCollapseBttn = $("#expand-collapse");



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

var sixAm = moment('06', 'HH').format('HH');
var sevenAm = moment('07', 'HH').format('HH');
var eightAm = moment('08', 'HH').format('HH');
var nineAm = moment('09', 'HH').format('HH');
var tenAm = moment('10', 'HH').format('HH');
var elevenAm = moment('11', 'HH').format('HH');
var twelvePm = moment('12', 'HH').format('HH');
var onePm = moment('13', 'HH').format('HH');
var twoPm = moment('14', 'HH').format('HH');
var threePm = moment('15', 'HH').format('HH');
var fourPm = moment('16', 'HH').format('HH');
var fivePm = moment('17', 'HH').format('HH');
var sixPm = moment('18', 'HH').format('HH');

var currentDay = moment();
var currentTime = currentDay.format('HH');
console.log(currentTime)

var hoursArray = [
    sixAm,
    sevenAm,
    eightAm,
    nineAm,
    tenAm,
    elevenAm,
    twelvePm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm,
    sixPm,
]

$("#currentDay").text(currentDay.format("dddd, MMMM Do"))


function displayStoredTodos() {
    var todoStorageArray = JSON.parse(localStorage.getItem("todo array"));
    if (todoStorageArray !== null) {
        for (var i = 0; i < todoInputArray.length; i++) {
                todoInputArray[i].text(todoStorageArray[i]);
        }
    }  
}

function compareCurrentTime() {
    for (var i = 0; i < hoursArray.length; i++) {
        if (hoursArray[i] < currentTime){
            accordionButtonArray.eq(i).addClass("past");
        } else if (hoursArray[i] === currentTime) {
            accordionButtonArray.eq(i).addClass("present");
        } else {
            accordionButtonArray.eq(i).addClass("future");
        }
    }
}
function init() {
    displayStoredTodos();
    compareCurrentTime();
}

init();
if (moment('12', 'HH').format('HH') < currentDay.format('HH')) {
    console.log(true)
    console.log(moment('06', 'HH').format('HH'));
    console.log(currentDay.format('HH'))
} else {
    (console.log(false));
    console.log(moment('06', 'HH').format('HH'));
    console.log(currentDay.format('HH'))
}

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



