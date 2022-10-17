import { Injectable } from '@angular/core';
import { courses } from 'src/assets/data/courses';
import { course } from '../../home/models/course';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getCourseById = (id: number): course => {
    let courseToReturn = null;
  
    for(let course of courses as course[]){
      if(course.id === id){
        courseToReturn = course;
      }
    }

    return courseToReturn;
  }
}
