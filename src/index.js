import './styles.css';

// Setting defaults
(function defaultProjects() {
    const study = {
        name: "Study (example)",
        todos: [
            {
                title: 'Learn Webpack (example)', 
                details: 'Research how to merge webpack.common.js and the production and development mode versions of those files', 
                dateNow: 'September 4th', 
                dueDate: 'September 5th', 
                priority: 'medium'
            }, {
                title: 'Finish Todo List (example)', 
                details: 'Update functionalities in my Todo list app', 
                dateNow: 'September 4th', 
                dueDate: 'September 5th', 
                priority: 'high'
            }, {
                title: 'Finish TOP Course (example)', 
                details: "I'd really like to get this course done in record time in about a month and a half or so", 
                dateNow: 'September 4th', 
                dueDate: 'October 15th', 
                priority: 'high'
            },
        ],
        id: 0,
    };

    const weightLoss = {
        name: "Weight Loss (example)",
        todos: [
            {
                title: 'Lose 20 Pounds (example)', 
                details: 'This fat has to come off some way, somehow!', 
                dateNow: 'September 4th', 
                dueDate: 'October 30th', 
                priority: 'high'
            },
        ],
        id: 1,
    };

    const getJob = {
        name: "Get Job (example)",
        todos: [
            {
                title: 'Research Market (example)', 
                details: 'Look for information about job openings in my area', 
                dateNow: 'September 4th', 
                dueDate: 'November 13th', 
                priority: 'medium'
            }, {
                title: 'Read job listings (example)', 
                details: 'Look at the newspaper to see if there are any job listings in my field of interest', 
                dateNow: 'September 4th', 
                dueDate: 'September 25th', 
                priority: 'low'
            },
        ],
        id: 2,
    };

    const shoppingList = {
        name: "Shopping List (example)",
        todos: [
            {
                title: 'Buy Phone (example)', 
                details: 'Look for a phone within my budget and buy it, hopefully less than 50k', 
                dateNow: 'September 5th', 
                dueDate: 'September 5th', 
                priority: 'high'
            },
        ],
        id: 3,
    }

    const projects = [study, weightLoss, getJob, shoppingList];

    if (!localStorage.projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}());

(function defaultNotes() {
    const notes = [
        'This is an example of a note',
        'I need to remember to practice coding',
        'Maybe add a few more features to my todo app',
        'No worries about the weather app project coming up!',
        'This is the last default note, add more if you want!',
    ];

    if (!localStorage.notes) {
        localStorage.setItem('notes', JSON.stringify(notes))
    }
}())

// Delayed imports
await import('./todo.js');
await import('./notes.js');