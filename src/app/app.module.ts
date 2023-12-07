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
import { SingleFilterComponent } from './filter/single-filter/single-filter.component';
import { EdcaUrlSerializer, EndecapodService } from '@ibfd/endecapod';
import { HttpClientModule } from '@angular/common/http';
import { FilterExposeService, FilterOptionService } from './service/filter-option.service';


@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    DocumentsComponent,
    DetailsComponent,
    NavComponent,
    MainLayoutComponent,
    SingleFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TabsModule,
    HttpClientModule
  ],
  providers: [EndecapodService,
  EdcaUrlSerializer,
  FilterOptionService,
  FilterExposeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
