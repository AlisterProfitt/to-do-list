import deleteIcon from './img/delete.svg';

// Declarations
let display = document.querySelector('.display');
let notes = document.querySelector('.notes > p');
let addNoteIcon = document.querySelector('.notes > .icon');
const notesArray = JSON.parse(localStorage.getItem('notes'));

// Creating dialog for adding a new note
function emptyDisplay() {
    display.textContent = '';
    display.innerHTML = '';
}

function configureDisplayForAddingNotes() {
    emptyDisplay();
    display.style.display = 'flex';
    display.style.flexDirection = 'column';
    display.style.justifyContent = 'center';
    display.style.alignItems = 'center';
}

function newNoteHeader() {
    let heading = document.createElement('h1');
    heading.textContent = 'Create a New Note'
    display.appendChild(heading);
}

function newNoteInput() {
    let input = document.createElement('textarea');
    input.setAttribute('class', 'text-area')
    input.placeholder = 'Type your text in here!';
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNoteButton();
        }
    })
    display.appendChild(input);
}

function addNewNoteButton() {
    let newNoteButton = document.createElement('button');
    newNoteButton.setAttribute('class', 'add-new-note-button')
    newNoteButton.textContent = 'Add +'
    newNoteButton.addEventListener('click', addNoteButton);
    display.appendChild(newNoteButton);
}

function addNoteDialog() {
    configureDisplayForAddingNotes();
    newNoteHeader();
    newNoteInput();
    addNewNoteButton();    
}

// Giving functionality to the add icon and add note button
function addNoteButton() {
    let input = document.querySelector('.text-area');
    let newNote = input.value;
    notesArray.unshift(newNote);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    renderNotes(notesArray);
}

// Making the notes appear on screen
function configureDisplayForDisplayingNotes() {
    emptyDisplay();
    display.style.display = 'grid';
    display.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 33%)';
    display.style.overflow = 'auto';
    display.style.flexDirection = '';
    display.style.justifyContent = 'center';
    display.style.alignItems = 'center';
}

function renderNotes(array) {
    configureDisplayForDisplayingNotes();
    checkNoNotesInArray();
    array.forEach((note, index, array) => {
        function deleteNote() { 
            array.splice(index, 1);
            localStorage.setItem('notes', JSON.stringify(array));
            renderNotes(array);
            checkNoNotesInArray()
        }
        let noteCard = document.createElement('article');
        noteCard.textContent = note;
        noteCard.style.position = 'relative';
            let button = document.createElement('img');
            button.src = deleteIcon;
            button.style.position = 'absolute';
            button.style.top = '0px';
            button.style.right = '0px';
            button.style.height = '30px';
            button.addEventListener('click', deleteNote)
            noteCard.appendChild(button);
        display.appendChild(noteCard);
    })
}

function checkNoNotesInArray() {
    if (notesArray.length === 0) {
        emptyDisplay()
        display.style.display = 'flex';
        display.style.flexDirection = 'column';
        let notice = document.createElement('h1')
        notice.textContent = 'There are no notes!!!'
        display.appendChild(notice);
        let addNoteAtZeroButton = document.createElement('button');
        addNoteAtZeroButton.textContent = 'Add New Note +';
        addNoteAtZeroButton.classList.add('add-new-note-button');
        addNoteAtZeroButton.addEventListener('click', addNoteDialog)
        display.appendChild(addNoteAtZeroButton);
    } 
}

// Adding Event Listeners
addNoteIcon.addEventListener('click', addNoteDialog);
notes.addEventListener('click', renderNotes.bind(this, notesArray));