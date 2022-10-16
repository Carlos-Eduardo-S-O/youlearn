import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedcard',
  templateUrl: './feedcard.component.html',
  styleUrls: ['./feedcard.component.scss'],
})
export class FeedcardComponent implements OnInit {
  @Input('name') courseName: string;
  @Input('description') courseDescription: string;
  @Input('level') courseLevel: string;
  @Input('imgsrc') imageSource: string;

  constructor() { }

  ngOnInit() {}

  getCourseName = (): string => {
    return this.courseName;
  }

  getCourseDescription = (): string => {
    return this.courseDescription;
  }

  getCourseLevel = (): string => {
    return this.courseLevel;
  }

  getImageSource = (): string => {
    return this.imageSource;
  }
}
