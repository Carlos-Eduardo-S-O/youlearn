import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from './models/course';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private courses: course[];
  
  constructor(
    private feedService: FeedService,
    private router: Router
    ) { 
    this.courses = feedService.getCourses();
  }

  ngOnInit() {

  }

  goToDetails = (courseId: course): void => {
    this.router.navigateByUrl('details', {state: {courseId: courseId}}  );
  }

  public getCourses = ():course[] => {
    return this.courses;
  }

}
