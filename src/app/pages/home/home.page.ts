import { Component, OnInit } from '@angular/core';
import { course } from './models/course';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private courses: course[];
  
  constructor(private feedService: FeedService) { 
    this.courses = feedService.getCourses();
  }

  ngOnInit() {
    
  }

  public getCourses = ():course[] => {
    return this.courses;
  }

}
