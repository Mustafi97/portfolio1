import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './profile/header/header.component';
import { IntroComponent } from './profile/intro/intro.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AboutComponent } from './profile/about/about.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './profile/contact/contact.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileService } from './profile/profile.service';
import { SkillsComponent } from './profile/skills/skills.component';
import {HttpClientModule} from '@angular/common/http';
import { EducationComponent } from './profile/education/education.component';
import { FooterComponent } from './profile/footer/footer.component';
import { ProjectsComponent } from './profile/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    SkillsComponent,
    EducationComponent,
    FooterComponent,
    ProjectsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SnotifyModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProfileService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
