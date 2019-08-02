function onReady() {
     const addToDoForm = document.getElementById('addToDoForm');
     let toDos = [];
     let id = 0;

     function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) { return; }

        toDos.push({
                title: newToDoText.value,
                complete: false
        
        });

        id++;

        console.log(toDos);
        newToDoText.value = '';
        renderTheUI();
}
addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
});
function renderTheUI() {
       const toDoList = document.getElementById('toDoList');
       toDoList.textContent = '';
       toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const Delete_btn = document.createElement('button');
        Delete_btn.textContent = "Delete!";

        Delete_btn.addEventListener('click', event => {
               toDos = toDos.filter(function(item){
                     return item.id !== toDo.id;
             })

               renderTheUI();
       });


        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(Delete_btn);

});
}
function createNewToDo(){
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if(!NEW_TODO_TEXT.value){ return; }
    toDos.push({
          title: NEW_TODO_TEXT.value,
          complete: false,
          id: id
  });
    id++;
    
    console.log(toDos);
    
    NEW_TODO_TEXT.value = '';
    renderTheUI();
}ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    console.log(toDos);
});

renderTheUI();
}



window.onload = function() {
      onReady();
};