import { Injectable } from '@angular/core';
import { course } from '../models/course';
import { courses} from './courses';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private courses: course[];
  
  constructor() { 
    this.courses = courses as course[];
  }

  getCourses = (): course[] => {
    return this.courses;
  }
}
