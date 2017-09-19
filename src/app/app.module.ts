import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompliancesComponent } from './compliances/compliances.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComplianceCartComponent } from './compliance-cart/compliance-cart.component';
import { LoginComponent } from './login/login.component';
import { MyRequestComponent } from './my-request/my-request.component';
import { SubmitSucessComponent } from './submit-sucess/submit-sucess.component';
import { CheckListComponent } from './check-list/check-list.component';
import { AdminComplianceComponent } from './admin/admin-compliance/admin-compliance.component';
import { AdminRequestComponent } from './admin/admin-request/admin-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompliancesComponent,
    NavbarComponent,
    ComplianceCartComponent,
    LoginComponent,
    MyRequestComponent,
    SubmitSucessComponent,
    CheckListComponent,
    AdminComplianceComponent,
    AdminRequestComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'compliances', component: CompliancesComponent },
      { path: 'compliance-cart', component: ComplianceCartComponent },
      { path: 'check-list', component: CheckListComponent },
      { path: 'submitsucess', component: SubmitSucessComponent },
      { path: 'login', component: LoginComponent },
      { path: 'my-request', component: MyRequestComponent },
      { path: 'admin/compliance', component: AdminComplianceComponent },
      { path: 'admin/request', component: AdminRequestComponent },
    ]) 
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
