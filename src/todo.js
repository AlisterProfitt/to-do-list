import { format, parseISO } from '../node_modules/date-fns'
import deleteIcon from './img/delete.svg'

// Declarations
let display = document.querySelector('.display');
let projectsSidebarHeader = document.querySelector('.projects > p');
let projectsTray = document.querySelector('.projects-list')
const projects = JSON.parse( localStorage.getItem('projects') );
renderTodos(projects[0]);
let cancelButton = document.querySelector('#cancel');
const addProjectIcon = document.querySelector('.add-project');
const dialog = document.querySelector('.new-todo');
const projectDialog = document.querySelector('.new-project');
const form = document.querySelector('#todo-info');
const projectForm = document.querySelector('#project-info');
let cancelProject = document.querySelector('#cancel-project');

// Visualizing Projects Data Strucutre
// localStorage = {
//     projects: [
//         {
//             name: 'nameOfProject',
//             todos: [
//                 {
//                     dateNow,
//                     details,
//                     dueDate,
//                     priority,
//                     title,
//                 }
//             ],
//             id: ,
//         }
//     ]
// }

// TODOS: make enter also submit, make new empty project have delete button and more obvious add todo
// Add delete icon to projectsTray with functionality

// Creating classes for Project and Todos
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}
class Todo {
    constructor(title, details, dueDate, priority) {
        this.title = title;
        this.details = details;
        this.dateNow = format(new Date, 'MMMM do');
        this.dueDate = dueDate;
        this.priority = priority;
    };
};

// Adding new project
function newProjectButton() {
    projectDialog.showModal();
    projectForm.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(projectForm);
        const formDataObject = Object.fromEntries(formData);
        let name = formDataObject.name;
        let project = new Project(name);
        projects.push(project);
        giveIdsByIndex(projects);
        localStorage.setItem('projects', JSON.stringify(projects))
        projectForm.reset();
        projectDialog.close();
        renderTodos(projects[projects.length - 1]);
        listProjects();
    }
}

cancelProject.addEventListener('click', (e) => {
    e.preventDefault();
    projectForm.reset();
    projectDialog.close();
})

// Configuring form behavior for adding a new todo to a project
function newTodoButtonPress(index) {
        dialog.showModal();
        form.onsubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const formDataObject = Object.fromEntries(formData);
            let { title, details, dueDate, priority } = formDataObject;
            let dueDateISO = parseISO(dueDate);
            let dueDateFormatted = format(dueDateISO, 'MMMM do')
            let todo = new Todo(title, details, dueDateFormatted, priority);
            projects[index].todos.unshift(todo);
            localStorage.setItem('projects', JSON.stringify(projects))
            renderTodos(projects[index])
            form.reset();
            dialog.close();
        }
}

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    dialog.close();
})

// Making Project Names show up in the projects tray
function listProjects() {
    while (projectsTray.firstChild) {
        projectsTray.removeChild(projectsTray.firstChild);
    } 
    projects.forEach((project, index) => {
        let newProject = document.createElement('p');
        newProject.textContent = project.name;
        newProject.setAttribute('id', index);
        newProject.addEventListener('click', () => {renderTodos(project)});
        projectsTray.appendChild(newProject);
    })
}

// Make functions for Rendering Todos to the display
function emptyDisplay() {
    display.textContent = '';
    display.innerHTML = '';
    display.style.display = '';
    display.style.flexDirection = '';
    display.style.alignItems = '';
    display.style.justifyContent = '';
}

function configureTodosContainer() {
    emptyDisplay();
    display.style.display = 'flex';
    display.style.flexDirection = 'column';
    display.style.justifyContent = 'flex-start';
    display.style.alignItems = '';
}

function constructHeader(projectObject) {
    let headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
        let header = document.createElement('h1');
        header.textContent = projectObject.name;
        let addTodoButton = document.createElement('button');
        addTodoButton.textContent = 'Add New Todo'
        addTodoButton.addEventListener('click', () => {newTodoButtonPress(projectObject.id)})
    headerContainer.appendChild(header);
    headerContainer.appendChild(addTodoButton);
    display.appendChild(headerContainer);
}

function constructTodos(todoTitle, todoDetails, todoDateMade, todoDueDate, todoPriority, index, projectIndex) {
    let detailsContainer = document.createElement('div');
    detailsContainer.classList.add('hidden', 'details-container');
    detailsContainer.id = index;
    detailsContainer.textContent = todoDetails;
    
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
            detailsButton.addEventListener('click', () => {
                showDetails(detailsContainer, index);
            })
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
            let deletes = document.createElement('img');
            deletes.src = deleteIcon;
            deletes.alt = 'Delete';
            deletes.addEventListener('click', () => {deleteTodo(projects, index, projectIndex)})
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
    display.appendChild(detailsContainer);
}

function giveIdsByIndex(array) {
    array.forEach((item, index) => {
        item.id = index;
    })
}

function renderTodos(projectObject) {
    if (projects.length !== 0) {
        let projectIndex = projectObject.id;
        configureTodosContainer();
        constructHeader(projectObject);
        projectObject.todos.forEach((todo, index) => {
            let { title, details, dateNow, dueDate, priority, } = todo;
            constructTodos(title, details, dateNow, dueDate, priority, index, projectIndex);
        })
    } else {
        hasEmptyProject();
    }
}

function deleteTodo(projectObject, index, indexOfProject) {
    let currentProject = projectObject[indexOfProject];
    currentProject.todos.splice(index, 1);
    if (currentProject.todos.length === 0) {
        projects.splice(indexOfProject, 1);
        indexOfProject = 0;
    }
    giveIdsByIndex(projects);
    localStorage.setItem('projects', JSON.stringify(projects))
    
    if (projects.length !== 0) {
    renderTodos(projectObject[indexOfProject])
    } else {
        hasEmptyProject();
    }
    
    listProjects();
}

function hasEmptyProject() {
    emptyDisplay()
    display.style.display = 'flex';
    display.style.flexDirection = 'column';
    display.style.alignItems = 'center';
    display.style.justifyContent = 'center';
    let notice = document.createElement('h1')
    notice.textContent = 'There are no projects!!!'
    display.appendChild(notice);
    let addProjectAtZeroButton = document.createElement('button');
    addProjectAtZeroButton.textContent = 'Add New Project +';
    addProjectAtZeroButton.classList.add('add-new-project-button');
    addProjectAtZeroButton.addEventListener('click', newProjectButton);
    display.appendChild(addProjectAtZeroButton);
}

listProjects()

// Showing Details
function showDetails(element) {
    element.classList.toggle('hidden');
}

projectsSidebarHeader.addEventListener('click', () => {
    if (display.style.justifyContent === 'center') {
        renderTodos(projects[0]);
    } else {
        projectsTray.classList.toggle('hidden');
    }
})

addProjectIcon.addEventListener('click', newProjectButton)
