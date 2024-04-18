
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerificationComponent } from './verification/verification.component';
import { AboutComponent } from './about/about.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModalComponent } from './modal/modal.component';
import { MenuListComponent } from './menu-list/menu-list.component';

export const routes: Routes = [
    {path:'', component: IntroComponent},
    {path:'intro', component: IntroComponent},
    {path:'login', component: LoginComponent},
    {path:"home", component:HomepageComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'', redirectTo:'https://www.facebook.com/', pathMatch:'full'},
    {path:'', redirectTo:'https://www.google.com.ng/', pathMatch:'full'},
    {path:'register', component:RegisterComponent},
    {path:'menu', component:MenuComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    {path:'reset',component:ResetpasswordComponent},
    {path:'verify',component:VerificationComponent},
    {path:'aboutus',component:AboutComponent},
    {path:'event',component:ReservationsComponent},
    {path:'second',component:SecondPageComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'modal',component:ModalComponent},
    {path:'menu-list',component:MenuListComponent},
    {path:'', redirectTo: '/intro', pathMatch: 'full'},

];
