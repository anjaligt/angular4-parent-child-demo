import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { AboutComponent } from './home/about/about.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HomeService } from './home/home.service';


@NgModule({
   declarations: [
    AppComponent,
   	UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ])
  ],
  
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
