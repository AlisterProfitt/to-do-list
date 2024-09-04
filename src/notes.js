// Declarations
let display = document.querySelector('.display');
let notes = document.querySelector('.notes > p');
let addNoteIcon = document.querySelector('.notes > .icon');
let notesArray = JSON.parse(localStorage.getItem('notes'));

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

// Getting notes from Local Storage
function updateNotesArray() {
    notesArray = JSON.parse(localStorage.getItem('notes'));
}

// Giving functionality to the add icon and add note button
function addNoteButton() {
    updateNotesArray();
    let input = document.querySelector('.text-area');
    let newNote = input.value;
    notesArray.unshift(newNote);
    console.log(notesArray);
    console.log(newNote);
    localStorage.setItem('notes', JSON.stringify(notesArray));
    renderNotes(notesArray);
}

// Making the notes appear on screen
function configureDisplayForDisplayingNotes() {
    emptyDisplay();
    display.style.display = 'grid';
    display.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 33%)';
    display.style.overflow = 'auto';
}

function renderNotes(array) {
    configureDisplayForDisplayingNotes();
    array.forEach((note) => {
        let noteCard = document.createElement('article');
        noteCard.textContent = note;
        display.appendChild(noteCard);
    })
}

// Adding Event Listeners
addNoteIcon.addEventListener('click', addNoteDialog);
notes.addEventListener('click', renderNotes.bind(this, notesArray));

export { notes , addNoteIcon }