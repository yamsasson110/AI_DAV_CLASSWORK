import { Request, Response } from 'express';

export function getStudents(req: Request, res: Response) {
    const students = [
        { id: 1, name: 'Alice', grades: [85, 90, 78] },
        { id: 2, name: 'Bob', grades: [65, 70, 80] },
        { id: 3, name: 'Charlie', grades: [90, 85, 95] },
        { id: 4, name: 'David', grades: [75, 80, 85]}, 
        { id: 5, name: 'Eve', grades: [88, 92, 79] }
    ];

    res.json(students);
}

// get a single student by ID
export function getStudentById(req: Request, res: Response) {
    const students = [
        { id: 1, name: 'Alice', grades: [85, 90, 78] },
        { id: 2, name: 'Bob', grades: [65, 70, 80] },
        { id: 3, name: 'Charlie', grades: [90, 85, 95] },
        { id: 4, name: 'David', grades: [75, 80, 85]}, 
        { id: 5, name: 'Eve', grades: [88, 92, 79] }
    ];

    const id = req.params.id;
    if (typeof id !== 'string') {
        res.status(400).json({ message: 'Invalid student ID' });
        return;
    }

    const student = students.find(s => s.id === parseInt(id, 10));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}

