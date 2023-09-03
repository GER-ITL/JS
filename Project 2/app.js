const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
//console.log(inputElement.value)

//const notes = ['Заметка 1', 'Заметка 2']
/*function render(){
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemp(notes[i]))
    }

}

render()*/
createBtn.onclick = function(){
    if(inputElement.value.length == 0 ){
        return 
    }
/*listElement.innerHTML = `  <li>
    <label>${inputElement.value}</label>
        <div class="btnDiv">
            <span id='add'>✔️</span>
            <span id='del'>❌</span>
        </div>
</li>`*/

const newNote ={
    title: inputElement.value,
    completed: false,
}
listElement.insertAdjacentHTML('beforeend',getNoteTemp(newNote))
inputElement.value = ''
}

/*const notes= [{
    title: 'Заметка 1',
    completed: false,
},
{
    title: 'Заметка 2',
    completed: true,
},
]*/
function render(){
    for(let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemp(notes[i]))
    }

}

render()

function getNoteTemp(note){
    return `  <div><li class = 'liList'>
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <div class= 'divBtn'>
            <span class='Btn-${note.completed ? 'warning' : 'success'}' id='add'>✔️</span>
            <button class='Btn' id='del'>❌</button>
            </div>
        </li>
    </div>`
}


/*


const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
//console.log(inputElement.value)

/*function render(){
    listElement.insertAdjacentHTML('beforeend', getNoteTemp(notes[1]))
    listElement.insertAdjacentHTML('beforeend', getNoteTemp(notes[0]))
}

createBtn.onclick = function(){
    if(inputElement.value.length == 0 ){
        return 
    }
    /*listElement.innerHTML = `  <li>
    <label>${inputElement.value}</label>
        <div class="btnDiv">
            <span id='add'>✔️</span>
            <span id='del'>❌</span>
        </div>
</li>`
listElement.insertAdjacentHTML('beforeend', getNoteTemp(inputElement.value))
inputElement.value = ''
}

function getNoteTemp(note){
    return `  <div><li class = 'liList'>
    <span >${inputElement.value}</span>
        <div class= 'divBtn'>
            <span class='Btn' id='add'>✔️</span>
            <span class='Btn' id='del'>❌</span>
            </div>
        </li>
    </div>`
}
const notes= [{
    title: 'Заметка 1',
    completed: false,
},
{
    title: 'Заметка 2',
    completed: true,
}
]

function render(){
    for(let i = 0 ; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemp(notes))
    }
}
render()
 */

