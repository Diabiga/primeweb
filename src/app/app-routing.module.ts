import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditConseilsComponent } from './audit-conseils/audit-conseils.component';
import { AutreDomaineComponent } from './autre-domaine/autre-domaine.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ExpertiseAssistanceComponent } from './expertise-assistance/expertise-assistance.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProduitsComponent } from './produits/produits.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { SecuriteComponent } from './securite/securite.component';
import { ServiceComponent } from './service/service.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [

  {path: '',component: Test2Component},
  {path: 'accueil',component: Test2Component},
  {path: 'autit-conseils',component: AuditConseilsComponent},
  {path: 'autres',component: AutreDomaineComponent},
  {path: 'clients',component: ClientsComponent},
  {path: 'contacts',component:ContactComponent},
  {path: 'expertise-assistance',component:ExpertiseAssistanceComponent},
  {path: 'presentation',component:PresentationComponent},
  {path: 'produits',component:ProduitsComponent},
  {path: 'recrutement',component:RecrutementComponent},
  {path: 'securite',component:SecuriteComponent},
  {path: 'service',component:ServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
