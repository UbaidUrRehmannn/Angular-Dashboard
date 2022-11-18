import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
public navigations=[
{name:"Ubaid",job:"Full Stack Developer",experience:"10 Yrs",link:"fdsg"},
{name:"person 2",job:"Full Stack Developer",experience:"6 Yrs",link:"fdsg"},
{name:"person 3",job:"Full Stack Developer",experience:"4 Yrs",link:"fdsg"},
{name:"person 4",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"},
{name:"person 5",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"},
{name:"person 6",job:"Full Stack Developer",experience:"2 Yrs",link:"fdsg"}
]
  constructor() { }

  ngOnInit() {
  }

}
