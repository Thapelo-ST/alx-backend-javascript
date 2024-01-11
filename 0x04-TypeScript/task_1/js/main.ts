type TeacherBase = {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    contract: boolean;
};

type Teacher = TeacherBase & { [key: string]: any };

function initializeTeacher({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    contract,
    ...rest
}: TeacherBase): Teacher {
    const teacher: Teacher = {
        firstName,
        lastName,
        fullTimeEmployee,
        yearsOfExperience,
        location,
        contract,
        ...rest,
    };

    Object.defineProperty(teacher, 'firstName', { writable: false });
    Object.defineProperty(teacher, 'lastName', { writable: false });

    return teacher;
}

interface Directors extends Teacher{
    numberOfReports: number;
}

interface Student {
    firstName: string;
    lastName: string;
}

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}