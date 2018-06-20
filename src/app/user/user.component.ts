import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	data;
	addResult;
	productResult;

  constructor(private homeservice : HomeService) { 
  	  this.addResult = homeservice.add(2,4);
	  this.productResult = homeservice.product(2,4);
	  console.log(this.addResult);
	  console.log(this.productResult);

  }

  ngOnInit() {
  }

  

}
