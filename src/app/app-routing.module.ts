import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandDetailComponent } from './components/brands/brand-detail/brand-detail.component';
import { BrandsComponent } from './components/brands/brands.component';

const routes: Routes = [
  { path: '', redirectTo: '/brands', pathMatch: 'full' },
  { path: 'brands', component: BrandsComponent },
  { path: 'brands/:name', component: BrandDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
