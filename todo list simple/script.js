const add = document.querySelector(".add")
const input = document.querySelector(".input")
const dTasks = document.querySelector(".tasks")
//const outInput = document.querySelector('.out-input')



add.addEventListener('click', function () {
    if (input.value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        const task = input.value;

        const outDiv = document.createElement('div')
        outDiv.classList.add('output-task')

        const outInput = document.createElement('input')
        outInput.classList.add('out-input');
        outInput.type = 'text';
        outInput.value = task;

        outDiv.appendChild(outInput);

        const task_action = document.createElement('div');
        task_action.classList.add('action')

        const outDone = document.createElement('button')
        outDone.classList.add('done')
        outDone.innerText = 'DONE'
        const outDelete = document.createElement('button')
        outDelete.classList.add('delete')
        outDelete.innerText = 'DELETE'


        task_action.appendChild(outDone)
        task_action.appendChild(outDelete)

        outDiv.appendChild(task_action);
        dTasks.appendChild(outDiv)





        outDelete.addEventListener('click', (e) => {
            dTasks.removeChild(outDiv);
        });
        outDone.addEventListener('click', (e) => {
            outInput.style.textDecoration = "line-through";
        });












        console.log(input.value)
        input.value = ""
    }

})





