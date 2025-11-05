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

1. addButton.addEventListener('click', () => { ... })

Arguments: 'click'
Description: Adds a new task to the list. Checks if the input is empty (plays an error sound if so). Creates an li element with the chosen colors and a delete “X” button. Plays an insertion sound. Allows deleting a single task or all tasks via Deletequadrato.

2. eliminazionesingola.addEventListener('click', () => { ... })

Arguments: 'click'
Description: Removes the single task (listElement) from the list.

3. Deletequadrato.addEventListener('click', () => { ... })

Arguments: 'click'
Description: Plays a sound and removes all tasks from the list.

4. listButton.addEventListener('click', () => { ... })

Arguments: 'click'
Description: Sets the task display to list view mode.

5. cardButton.addEventListener('click', () => { ... })

Arguments: 'click'
Description: Sets the task display to card view mode.