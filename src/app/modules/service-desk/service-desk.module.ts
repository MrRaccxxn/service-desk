import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ServiceDeskRoutingModule } from './service-desk.routing';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BoxComponent } from './components/box/box.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [
    //components
    HeaderComponent,

    //pages
    HomeComponent,
     SidebarComponent,
     MainContentComponent,
     SearchBoxComponent,
     BoxComponent,
     ActionButtonComponent,
  ],
  imports: [
    CommonModule,
    ServiceDeskRoutingModule,  
  ]
})
export class ServiceDeskModule { }
