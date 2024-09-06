import { format } from '../node_modules/date-fns'
import editIcon from './img/edit.svg'
import deleteIcon from './img/delete.svg'

// Declarations
let display = document.querySelector('.display');
let projectsSidebarHeader = document.querySelector('.projects > p');
let projectsTray = document.querySelector('.projects-list')
const projects = JSON.parse( localStorage.getItem('projects') );
renderTodos(projects[0]);
let newTodoButton = document.querySelector('#addTodo');
let cancelButton = document.querySelector('#cancel');

const dialog = document.querySelector('.new-todo');
const form = document.querySelector('#todo-info');

// Visualizing Projects Data Strucutre
// localStorage = {
// ____projects: [
//     ____{
//         ____name: 'nameOfProject',
//         ____todos: [
//             ____{
//                 ____dateNow,
//                 ____details,
//                 ____dueDate,
//                 ____priority,
//                 ____title,
//             ____}
//         ____]
//     ____}
// ____]
// }

// Creating classes for Project and Todos
class Project {
    constructor(name) {
        this.name = name;
    }
}
class Todo {
    constructor(title, details, dueDate, priority) {
        this.title = title;
        this.details = details;
        this.dateNow = format(new Date, 'MMMM do');
        this.dueDate = format(dueDate, 'MMMM do');
        this.priority = priority;
    };
};

// Configuring form behavior for adding a new todo to a project
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);
    let { title, details, date, priority } = formDataObject;
    let todo = new Todo(title, details, date, priority);
    form.reset();
    dialog.close();
})

newTodoButton.addEventListener('click', () => {
    dialog.showModal();
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    dialog.close();
})

// Making Project Names show up in the projects tray
function listProjects() {
    projects.forEach((project, index) => {
        let newProject = document.createElement('p');
        newProject.textContent = project.name;
        newProject.setAttribute('id', index);
        newProject.addEventListener('click', renderTodos.bind(this, project));
        projectsTray.appendChild(newProject);
    })
}

// Make functions for Rendering Todos to the display
function emptyDisplay() {
    display.textContent = '';
    display.innerHTML = '';
}

function configureTodosContainer() {
    emptyDisplay();
    display.style.display = 'flex';
    display.style.flexDirection = 'column';
    display.style.justifyContent = 'flex-start';
    display.style.alignItems = '';
}

function constructHeader(projectName) {
    let headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
        let header = document.createElement('h1');
        header.textContent = projectName
        let addTodoButton = document.createElement('button');
        addTodoButton.setAttribute('id', 'addTodo');
        addTodoButton.textContent = 'Add New Todo'
    headerContainer.appendChild(header);
    headerContainer.appendChild(addTodoButton);
    display.appendChild(headerContainer);
}

function constructTodos(todoTitle, todoDetails, todoDateMade, todoDueDate, todoPriority) {
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
        let leftAligned = document.createElement('div');
        leftAligned.classList.add('left-aligned');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'project-checkbox'
            checkbox.classList.add('project-checkbox')
            checkbox.addEventListener('click', () => {
                todoContainer.classList.toggle('checked');
            })
        leftAligned.appendChild(checkbox);
            let title = document.createElement('p');
            title.textContent = todoTitle;
        leftAligned.appendChild(title);

    todoContainer.appendChild(leftAligned);
    
        let rightAligned = document.createElement('div');
        rightAligned.classList.add('right-aligned');
            let detailsButton = document.createElement('button');
            detailsButton.textContent = 'Details';
        rightAligned.appendChild(detailsButton);
            let dateMade = document.createElement('div');
            dateMade.classList.add('date-made');
                let dateMadePara1 = document.createElement('p');
                dateMadePara1.textContent = 'Date Made';
                let dateMadePara2 = document.createElement('p');
                dateMadePara2.textContent = todoDateMade;
            dateMade.appendChild(dateMadePara1);
            dateMade.appendChild(dateMadePara2);
        rightAligned.appendChild(dateMade);
            let dueDate = document.createElement('div');
            dueDate.classList.add('due-date');
                let dueDatePara1 = document.createElement('p');
                dueDatePara1.textContent = 'Due Date';
                let dueDatePara2 = document.createElement('p');
                dueDatePara2.textContent = todoDueDate;
            dueDate.appendChild(dueDatePara1);
            dueDate.appendChild(dueDatePara2);
        rightAligned.appendChild(dueDate);
            let edit = document.createElement('img');
            edit.src = editIcon;
            edit.alt = 'Edit';
        rightAligned.appendChild(edit);
            let deletes = document.createElement('img');
            deletes.src = deleteIcon;
            deletes.alt = 'Delete';
        rightAligned.appendChild(deletes);
    
    todoContainer.appendChild(rightAligned);
    switch (todoPriority) {
        case 'high':
            todoContainer.classList.add('high-priority');
            break;
        case 'medium':
            todoContainer.classList.add('medium-priority');
            break;
        case 'low':
            todoContainer.classList.add('low-priority');
            break;
    }

    display.appendChild(todoContainer);
}

function renderTodos(projectObject) {
    configureTodosContainer();
    constructHeader(projectObject.name);
    projectObject.todos.forEach((todo) => {
        let { title, details, dateNow, dueDate, priority } = todo;
        constructTodos(title, details, dateNow, dueDate, priority);
    })
}

listProjects()

projectsSidebarHeader.addEventListener('click', () => {
    projectsTray.classList.toggle('hidden');
})