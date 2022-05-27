let deleteBtn = document.getElementById('delete');
let myTodo = document.querySelector('.my-todo')
let confirmForm = document.querySelector('.confirm')
let cancelBtn = document.querySelector('.cancel-btn')
let confirmBtn = document.querySelector('.confirm-btn')
deleteBtn.addEventListener('click', function tbao() {
    confirmForm.classList.add('open');
})
cancelBtn.addEventListener('click', function close() {
    confirmForm.classList.remove('open')
})
confirmBtn.addEventListener('click', function confirm() {
    myTodo.classList.add('close')
    confirmForm.classList.remove('open')
})
var todoList = new Object()
todoList :
{
    "todoList"
    [
        {
            "taskBlock": "Home", "tasks":
                [
                    { "task": "Clean room", "done": false },
                    { "task": "Get storage unit", "done": false }
                ]
        },
        {
            "taskBlock": "Work", "tasks":
                [

                    { "task": "Analysis", "done": false },
                    {
                        "task": "Sorting", "done": false, "subtasks":
                            [
                                { "task": "Pull from computer 1", "done": false },
                                { "task": "Walk to computer 2", "done": false },
                                { "task": "Save on computer 2", "done": false }
                            ]
                    },
                    { "task": "Sort files", "done": false },
                    { "task": "Plot data", "done": false }
                ]
        }
    ]

}
console.log(todoList.subtasks)