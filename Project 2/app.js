const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
//console.log(inputElement.value)

const notes = ['1', '2']
function render(){
    listElement.insertAdjacentHTML('beforeend', `  <div><li class = 'liList'>
<span >${inputElement.value}</span>
    <div class= 'divBtn'>
        <span class='Btn' id='add'>✔️</span>
        <span class='Btn' id='del'>❌</span>
        </div>
    </li>
</div>`)
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
</li>`*/
listElement.insertAdjacentHTML('beforeend', `  <div><li class = 'liList'>
<span >${inputElement.value}</span>
    <div class= 'divBtn'>
        <span class='Btn' id='add'>✔️</span>
        <span class='Btn' id='del'>❌</span>
        </div>
    </li>
</div>`)
inputElement.value = ''
}