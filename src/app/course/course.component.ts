import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  courses = [
    {
      id:101 ,name:'JavaScript for Beginner', author:'john Mikela', duration:48, type:'free',
      price:0.00, rating:3.5, image:'assets/courses/jsb.jpg',
      description:'in this course you will learn the fundamantels of JavaScript' 
    },
    {
      id:102 ,name:'Angular for Beginner', author:'Mark Vought', duration:28, type:'premium',
      price:129.00, rating:4.5, image:'assets/courses/angularb.jpg', 
      description:'in this course you will learn the fundamantels of Angular framework' 
    },
    {
      id:103 ,name:'React for Beginner', author:'Steve Smith', duration:18.5, type:'free',
      price:0.00, rating:4.0, image:'assets/courses/react.jpg', 
      description:'in this course you will learn the fundamantels of React framework' 
    },
    {
      id:104 ,name:'Advanced Angular ', author:'Steve Smith', duration:19.5, type:'premium',
      price:145.00, rating:4.8, image:'assets/courses/angulara.jpg', 
      description:'in this course you will learn Angular from basic to Advance' 
    },
    {
      id:105 ,name:'Advanced JavaScript ', author:'john Mikela', duration:60, type:'premium',
      price:150.00, rating:4.5, image:'assets/courses/jsa.jpg', 
      description:'in this course you will learn all of JavaScript modern concepts' 
    },
    {
      id:106 ,name:'Angular with .NET core', author:'Mark Vought', duration:68, type:'premium',
      price:129.00, rating:4.5, image:'assets/courses/awnet.jpg', 
      description:'in this course you will learn the Angular with .NET core' 
    },
    {
      id:107 ,name:'UX Designer', author:'john Mikela', duration:22, type:'free',
      price:40.00, rating:4.5, image:'assets/courses/sos.jpg', 
      description:'in this course you will learn the Angular with .NET core' 
    },
    {
      id:108 ,name:'UX Designer Advanced', author:'john Mikela', duration:33, type:'premium',
      price:60.00, rating:4.5, image:'assets/courses/ux.jpg', 
      description:'in this course you will learn the Angular with .NET core' 
    }
  ];
  getTotal(){
    return this.courses.length;
  }
  getFree(){
    return this.courses.filter(courses => courses.type == 'free').length;
  }
  getPremium(){
    return this.courses.filter(courses => courses.type == 'premium').length;
  }

  courseCountButton: string= 'all';
  setsSearchInput:string='';
  
  gotfilterOnSelectedButton(data:string){
    this.courseCountButton = data;
  }
  getSearchData(searchValue:string){
    this.setsSearchInput =searchValue;
    console.log(this.setsSearchInput);
  }

}
