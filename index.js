const clearTodo=document.querySelector ('.clearTodo');
const clearAll = document.querySelector ('.clear');

const btnadd = document.querySelector ('.btn');
const enterTodo = document.querySelector ('input[name = "addTodo"]');
const newElements = document.querySelector ('.newElements');



btnadd.addEventListener ('click', createNewItem);
let count =0;

function createNewItem () {
    let item = document.createElement ('li');
    item.className = "newItem";   
    let content = enterTodo.value;
    
    if (content==='') {
        alert ('Enter task Todo');
    }
    else {
     newElements.appendChild (item);
     localStorage.setItem (count, content);
     let txt = document.createTextNode (localStorage.getItem(count));
     item.setAttribute('count', count);
     count++;
     enterTodo.value = '';
     item.appendChild (txt);
 }
    let closeButton = document.createElement ('button');
    closeButton.className = 'closeButton';
    closeButton.innerText = "X"
    item.appendChild (closeButton);
    closeButton.onclick = function () {
    closeButton.parentElement.className = 'deleted';
    let a = closeButton.parentElement.getAttribute('count');
    localStorage.removeItem(a);
    //count--;
}

}



let i=0;
window.addEventListener ('load', () => {
    if (localStorage.length !=0) {
        let i=0;
        for (i=0; i<localStorage.length; i++) {
            let count= localStorage.key(i);

            let item = document.createElement ('li');
            item.className = "newItem";
             newElements.appendChild (item);
             item.setAttribute('count', count);
            
            let txt = document.createTextNode (localStorage.getItem(count));
            count++;
            item.appendChild (txt);
        
            let closeButton = document.createElement ('button');
            closeButton.className = 'closeButton';
            closeButton.innerText = "X"
            item.appendChild (closeButton);
            closeButton.onclick = function () {
            closeButton.parentElement.className = 'deleted';
            let a = closeButton.parentElement.getAttribute('count');
            localStorage.removeItem(a); 
            //count--;
            }
            
           } 
        
    }})
        

    
clearAll.onclick = function () {newElements.replaceChildren();
localStorage.clear();
count=0;
}



enterTodo.addEventListener ('keypress', (pressed) => {
    const keyEnter = 13;
    if (pressed.which == keyEnter) {
        createNewItem ()
    }
});

let pt = document.querySelector ('span'); 
pt.innerText = localStorage.length; //меняется только при обновлении стр.










