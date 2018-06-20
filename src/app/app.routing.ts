import { Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';


export const appRoutes: Routes = [
  { path: 'User', 
    component: UserComponent 
  },
  {
    path: 'product',
    component: ProductComponent
  },
  { path: 'about',
    component: AboutComponent
  }
];