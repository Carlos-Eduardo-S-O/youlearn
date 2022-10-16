import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedcard',
  templateUrl: './feedcard.component.html',
  styleUrls: ['./feedcard.component.scss'],
})
export class FeedcardComponent implements OnInit {
  private courseName: string = "Inglês";
  private courseDescription: string = "Curso de inglês";
  private levelCourse: string = "Iniciante";
  private imageSource: string = "src/assets/course.png";

  constructor() { }

  ngOnInit() {}

  getCourseName = (): string => {
    return this.courseName;
  }

  getCourseDescription = (): string => {
    return this.courseDescription;
  }

  getLevelCourse = (): string => {
    return this.levelCourse;
  }

  getImageSource = (): string => {
    return this.imageSource;
  }
}
