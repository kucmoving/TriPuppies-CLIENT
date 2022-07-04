import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ResumeDetailsComponent } from './components/pages/resume-details/resume-details.component';
import { MessageComponent } from './components/pages/message/message.component';
import { MypuppiesComponent } from './components/pages/mypuppies/mypuppies.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { PostAJobComponent } from './components/pages/post-a-job/post-a-job.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PuppyListComponent } from './components/pages/puppy-list/puppy-list.component';
import { PuppyDetailsComponent } from './components/pages/puppy-details/puppy-details.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import {ToastrModule} from 'ngx-toastr'
import { JwtInterceptor } from './_interceptor/jwt.interceptor';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PuppyEditComponent } from './components/pages/puppy-edit/puppy-edit.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {TimeagoModule} from 'ngx-timeago';


@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    PreloaderComponent,
    LoginComponent,
    RegisterComponent,
    PuppyEditComponent,
    ResumeDetailsComponent,
    MessageComponent,
    MypuppiesComponent,
    ComingSoonComponent,
    ErrorComponent,
    AboutComponent,
    JobsComponent,
    PostAJobComponent,
    PuppyDetailsComponent,
    PuppyListComponent,
    ContactComponent,
    NavbarStyleOneComponent,
    FooterStyleOneComponent,
    NavbarStyleTwoComponent,
    NavbarStyleThreeComponent,
    FooterStyleTwoComponent,

],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
        positionClass:'toast-top-right'
      }),
      NgxGalleryModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      PaginationModule.forRoot(),
      TimeagoModule.forRoot()
  ],

  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
