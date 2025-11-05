
const addButton=document.getElementById('add-btn');

const listButton=document.getElementById('list-view-btn');
const cardButton=document.getElementById('card-view-btn');

const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list-container');

const Deletequadrato = document.getElementById("eliminaquadrato")


//add
addButton.addEventListener('click', () => {
    const TestoInput = document.getElementById("name");
    const coloreinput = document.getElementById("coloreselect");
    const coloretestoinput = document.getElementById("coloretextselect");
    const errorSound = document.getElementById('ErroreSuono');
    const insericiSound = document.getElementById('InserireSuono');
    const CompleteEliminazione = document.getElementById('EliminareTutto');
    
    const inputValue=taskInput.value.trim()

        if (inputValue === "") {
    
    errorSound.currentTime = 0; 
    errorSound.play();  
    return; 
  }
    
    const listElement = document.createElement('li')

    const eliminazionesingola = document.createElement("button")
    eliminazionesingola.textContent = "X";
    eliminazionesingola.classList.add("speciale-btn");

    listElement.style.backgroundColor = coloreinput.value;
    listElement.style.color = coloretestoinput.value;
    listElement.style.borderColor = coloretestoinput.value;
    eliminazionesingola.style.borderColor = coloretestoinput.value;
    

    
    listElement.innerHTML = inputValue;
    insericiSound.currentTime = 0; 
    insericiSound.play(); 
    document.getElementById('task-list-container').appendChild(listElement);
    listElement.appendChild(eliminazionesingola);

    taskInput.value = '';
    
    eliminazionesingola.addEventListener("click", () => {
    listElement.remove();
});

    Deletequadrato.addEventListener("click", () => {
    CompleteEliminazione.currentTime = 0; 
    CompleteEliminazione.play();  
    taskList.removeChild(listElement);

});

})

listButton.addEventListener('click', () => {
    taskList.classList.remove('card-view');
    taskList.classList.add('list-view');
})

cardButton.addEventListener('click', () => {
    taskList.classList.remove('list-view');
    taskList.classList.add('card-view');
})

