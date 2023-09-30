const todoList = document.querySelector('.todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')

 todoForm.addEventListener('submit', formHandler)

 function formHandler(event){
    event.preventDefault()
    const taskText = todoInput.value
    if(taskText !== '')
    {
        // const li = `<li>${taskText}</li>`
        // todoList.insertAdjacentHTML('beforeend', li)
        const newTask = document.createElement('li')
        newTask.innerHTML = taskText

        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('role', 'button')
        deleteBtn.innerText = '×'
        deleteBtn.style['padding-top'] = '15px'
        deleteBtn.style['margin-left'] = '15px'
        deleteBtn.style['font-size'] = '50px'
        deleteBtn.style['background-color'] = 'transparent'
        deleteBtn.style['color'] = 'red'
        newTask.append(deleteBtn)

        deleteBtn.addEventListener('click', deleteTask)

        todoList.append(newTask)
        todoInput.value = ''
        todoInput.focus()

    }
 }

function deleteTask(){
    this.closest('li').remove()
}