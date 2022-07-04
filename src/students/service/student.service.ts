/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from 'src/students/entity/student.entity';
import { CreateStudentdDto, UpdateStudentDto } from 'src/students/dtos/student.dtos';

@Injectable()
export class StudentService {
  private countIdStudents = 1;

  private students: Student[] = [
    {
      id: 1,
      name: 'Marlon',
      address: 'Jose Argudo',
      phone: 2731487,
    },
  ];

  /** Buscar todo */
  findAll() {
    return this.students;
  }

  /**Buscar por id */

  findOne(id: number) {
    return this.students.find((item) => item.id == id);
  }
  /**Create */

  create(payload: CreateStudentdDto) {
    this.countIdStudents = this.countIdStudents + 1;
    const newStudent = {
      id: this.countIdStudents,
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  /**UPDATE */

  update(id: number, payload: UpdateStudentDto) {

    const student = this.findOne(id);
    if (student) {
      const index = this.students.findIndex((item) => item.id == id);
      this.students[index] = {
        ...student,
        ...payload,
      };
      return this.students[index];
    }
    return null;
  }
  /**DELETE  */

  delete(id: number) {
    const indexStudent = this.students.findIndex((item) => item.id === id); //
    if (indexStudent === -1) {
      throw new NotFoundException(`Estudiante ${id} no encontrado`);
    }

    this.students.splice(indexStudent, 1);
    return true;
  }
}
