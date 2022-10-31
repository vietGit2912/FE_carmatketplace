import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { BrandDetailComponent } from './components/brands/brand-detail/brand-detail.component';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';
import { SearchComponent } from './components/search/search.component';
import { BrandEditorComponent } from './components/brands/brand-detail/brand-editor/brand-editor.component';
import { ListcarComponent } from './components/cars/listcar/listcar.component';
import { BrandInformationComponent } from './components/brands/brand-detail/brand-information/brand-information.component';
import { SpinnerComponent } from './components/common_ui/spinner/spinner.component';
import { NotificationComponent } from './components/common_ui/notification/notification.component';
import { BrandListComponent } from './components/brands/brand-list/brand-list.component';
import { CardComponent } from './components/common_ui/card/card.component';
import { BrandCarComponent } from './components/brands/brand-detail/brand-car/brand-car.component';
@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    BrandDetailComponent,
    SearchComponent,
    BrandEditorComponent,
    ListcarComponent,
    BrandInformationComponent,
    SpinnerComponent,
    NotificationComponent,
    BrandListComponent,
    BrandfilterPipe,
    CardComponent,
    BrandCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
