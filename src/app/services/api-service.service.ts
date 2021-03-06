import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = 'http://192.168.0.100:9100/api/';

  constructor(private http: HTTP) { }

  addAdminValues(ss) {
    return this.http.post(this.BASE_URL + 'AdminsValues', ss, {});
  }

  addAdministrative(ss) {
    return this.http.post(this.BASE_URL + 'AdministrativesValues', ss, {});
  }

  addCourse(ss) {
    return this.http.post(this.BASE_URL + 'CoursesValues', ss, {});
  }

  addMajor(ss) {
    return this.http.post(this.BASE_URL + 'MajorsValues', ss, {});
  }

  addStudent(ss) {
    return this.http.post(this.BASE_URL + 'StudentsValues', ss, {});
  }

  addTeacher(ss) {
    return this.http.post(this.BASE_URL + 'TeachersValues', ss, {});
  }

  getAdministratives() {
    return this.http.get(this.BASE_URL + 'AdministrativesValues', {}, {});
  }

  getAdmins() {
    return this.http.get(this.BASE_URL + 'AdminsValues', {}, {});
  }

  getCourses() {
    return this.http.get(this.BASE_URL + 'CoursesValues', {}, {});
  }

  getMajors() {
    return this.http.get(this.BASE_URL + 'MajorsValues', {}, {});
  }

  getStudents() {
    return this.http.get(this.BASE_URL + 'StudentsValues', {}, {});
  }

  getTeachers() {
    return this.http.get(this.BASE_URL + 'TeachersValues', {}, {});
  }

  assignStudentToMajor(ss){
    return this.http.post(this.BASE_URL + 'MajorsStudentsValues', ss, {});
  }

  assignStudentToCourse(ss)
  {
    return this.http.post(this.BASE_URL+'CoursesStudentsValues',ss,{});
  }

  addSemester(ss)
  {
    return this.http.post(this.BASE_URL+'SemestersValues',ss,{});
  }
  getSemesters()
  {
    return this.http.get(this.BASE_URL+'SemestersValues',{},{});
  }

  getStudentData(ss)
  {
    return this.http.post(this.BASE_URL+'GradesValues',ss,{});
  }
}
