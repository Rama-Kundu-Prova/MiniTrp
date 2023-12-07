import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FilterListComponent } from './filter/filter-list/filter-list.component';
import { FormsModule } from '@angular/forms';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { DocumentsComponent } from './result/documents/documents.component';
import { DetailsComponent } from './result/details/details.component';
import { NavComponent } from './layout/nav/nav.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    DocumentsComponent,
    DetailsComponent,
    NavComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
