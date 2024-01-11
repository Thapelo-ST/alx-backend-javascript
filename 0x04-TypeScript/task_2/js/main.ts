interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): String;
    workDirectorTasks(): String;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): String;
    workTeacherTasks(): String;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak() : string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): String {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot from home';
    }

    getCoffeeBreak() : string {
        return 'cannot have break';
    }

    workTeacherTasks(): String {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }

    return 'Teaching History';
}