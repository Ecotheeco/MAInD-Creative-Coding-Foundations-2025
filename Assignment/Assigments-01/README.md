# Assignemt 01

## Brief

Starting from the concept of a pinboard, implement a web page that:

- is responsive (properly layout for smartphone, tablet, and desktop)
- allows the user to add and remove elements
- allows the user to coustomize elements (i.e. colors, size)
- allows the switch between two views (at least)

## Schreenshots

![plot](./DOC/Screenshot%202025-11-05%20090906.png)
![plot](./DOC/Screenshot%202025-11-05%20090942.png)

## Project description

The user can choose a word to write (which is required to start the function) and select its color as well as the background color. Users can also choose how they want to display these words. Finally, there are two different ways to delete objects: individually or all at once.

## Function list:

-addButton: It starts the process of adding a new object by analyzing the text input and the color input. It creates a new element only if the user has entered text.
    
-if (inputValue === ""): It checks whether the user did not enter any text, so it can play an error sound.
    
-errorSound.play(): It plays the error sound if no text is entered.
  
-eliminazionesingola.classList.add("speciale-btn"): It adds a single delete button inside the text box (so the user can delete only a specific item).

-listElement.style.backgroundColor = coloreinput.value: It sets the background color chosen by the user.

-listElement.style.color = coloretestoinput.value: It sets the text color chosen by the user.

-listElement.style.borderColor = coloretestoinput.value: It sets the border color to match the selected text color.

-eliminazionesingola.style.borderColor = coloretestoinput.value: It sets the border color of the delete button to match the selected text color.
    
-insericiSound.play(): It plays the confirmation sound when the user adds a new box.

-document.getElementById('task-list-container').appendChild(listElement): It adds the new box (with all its elements) to the container.

-listElement.appendChild(eliminazionesingola): It adds the delete button inside the newly created box.

-taskInput.value = '': It resets the text input field.
    
-CompleteEliminazione.play(): It plays a sound when the user deletes all elements.

-taskList.removeChild(listElement): It removes an element from the list.

-listButton.addEventListener: It changes the class when the button is clicked.

-cardButton.addEventListener: It changes the class when the button is clicked.

