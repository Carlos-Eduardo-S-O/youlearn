import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { course } from '../home/models/course';
import { DetailsService } from './services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  private course: course;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private detailsService: DetailsService
  ) { 
    const id = this.router.getCurrentNavigation().extras.state.courseId;
    this.course = detailsService.getCourseById(id);
  }

  ngOnInit() {
   
  }

  getImageSource = (): string => {
    return "../../../../assets/" + this.course.imgname;
    ;
  }

  getCourse = ():course => {
    return this.course;
  }

  goBack = ():void => {
    this.navCtrl.back();
  }

}
