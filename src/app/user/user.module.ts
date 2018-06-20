import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HomeService } from '../home/home.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [HomeService],
  declarations: [UserComponent]
})
export class UserModule { }
