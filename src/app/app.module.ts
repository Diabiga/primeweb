import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Test2Component } from './test2/test2.component';
import { Prototipe1Component } from './prototipe1/prototipe1.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { SecuriteComponent } from './securite/securite.component';
import { ExpertiseAssistanceComponent } from './expertise-assistance/expertise-assistance.component';
import { AutreDomaineComponent } from './autre-domaine/autre-domaine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuditConseilsComponent } from './audit-conseils/audit-conseils.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServiceComponent } from './service/service.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Test2Component,
    Prototipe1Component,
    RecrutementComponent,
    SecuriteComponent,
    ExpertiseAssistanceComponent,
    AutreDomaineComponent,
    FooterComponent,
    HomeComponent,
    AuditConseilsComponent,
    ClientsComponent,
    ContactComponent,
    PresentationComponent,
    ProduitsComponent,
    ServiceComponent,
    SlideComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
