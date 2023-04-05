const clearTodo=document.querySelector ('.clearTodo');
const clearAll = document.querySelector ('.clear');

const btnadd = document.querySelector ('.btn');
const enterTodo = document.querySelector ('input[name = "addTodo"]');
const newElements = document.querySelector ('.newElements');



btnadd.addEventListener ('click', createNewItem); 

  let keys = Object.keys (localStorage);
  count = Math.max.apply(null, keys)+1;

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
     changeText()
 }
    let closeButton = document.createElement ('button');
    closeButton.className = 'closeButton';
    closeButton.innerText = "X"
    item.appendChild (closeButton);
    closeButton.onclick = function () {
    closeButton.parentElement.className = 'deleted';
    let a = closeButton.parentElement.getAttribute('count');
    localStorage.removeItem(a); 
    changeText()
    
}
}


window.addEventListener ('load', () => {
    if (localStorage.length !=0) {
        let i=0;

            for (i=0; i< 10000; i++) {
            if (localStorage[i]===undefined) {
            continue
            }
            
            else {
            let count= localStorage.key(i);
            let item = document.createElement ('li');
            item.className = "newItem";
            item.setAttribute('count', count);
            newElements.appendChild (item);

            let content = localStorage.getItem(JSON.stringify(i))
            let txt = document.createTextNode (content);
            item.setAttribute ('i', i);
            item.appendChild (txt);
            changeText()
            let closeButton = document.createElement ('button');
            closeButton.className = 'closeButton';
            closeButton.innerText = "X"
            item.appendChild (closeButton);
            closeButton.onclick = function () {
            closeButton.parentElement.className = 'deleted';
            let a = closeButton.parentElement.getAttribute('i');
            localStorage.removeItem(a); 
            changeText()
            }           } }      } } )
        
 
clearAll.onclick = function () {newElements.replaceChildren();
localStorage.clear();
count=0;
changeText()
}

function changeText () {
let pt = document.querySelector ('span'); 
pt.innerText = localStorage.length; 
}







