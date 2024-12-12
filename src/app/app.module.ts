import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmsHomeTestComponent } from './pages/tms-home-test/tms-home-test.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MaterialModule } from './material-module.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { DialogAddProjectComponent } from './components/dialog-add-project/dialog-add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogEditProjectComponent } from './components/dialog-edit-project/dialog-edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    TmsHomeTestComponent,
    ProjectsComponent,
    CardComponent,
    DialogAddProjectComponent,
    DialogEditProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
