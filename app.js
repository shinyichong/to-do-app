
	function onReady (){
                let toDos = [];
		const addToDoForm = document.getElementById('addToDoForm');
		const newToDoText = document.getElementById('newToDoText');
		const toDoList = document.getElementById('toDoList');
        

        addToDoForm.addEventListener('submit',() => {
        	event.preventDefault();

        	//get the text
        	let title = newToDoText.value;

                toDos.push(title);
                console.log(toDos);

        	//create a new li
        	let newLi = document.createElement('li');

        	//create a new input
        	let checkbox = document.createElement('input');

        	//set the input's type to checkbox
        	checkbox.type = "checkbox";

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
    
                deleteBtn.addEventListener('click', function(event){
                 let buttonLiText = this.parentElement.childNodes[0].textContent;
                 // console.log(event);
                 // this.parentElement represents the button's <li> parent
                toDos.removeChild(this.parentElement);
      
                toDos.forEach(function(currentToDoList, index){
                 // console.log(currentToDoList, index);
                 // console.log(this);
        
                if(currentToDo === buttonLiText){
                // remove from array
                 toDos.splice(index, 1);
                }
                console.log(toDos);
         });
    })

        	//set the title
        	newLi.textContent = title;
        	//attach the checkbox to the li
        	newLi.appendChild(checkbox);
                //attach delete button to Li
                newLi.appendChild(deleteBtn);
        	//attach the li to the ul
        	toDoList.appendChild(newLi);
        	//empty the input
        	newToDoText.value = "";

        });
};

window.onload = function() {
  onReady();
};

