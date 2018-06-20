import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  add(a,b) {
  	var sum = a+b;
  	console.log(sum);
	return 'Module name is Home. Sum of number is '+ sum;
  }

  product(a,b)
  {
  	var product = a*b;
	return 'Module name is Home. Product of number is '+ product;
  }

}
