import { MaterialSampleComponent } from './../materialsample/materialsample.component';
import { AutocompleteComponent } from './../autocomplete/autocomplete.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'materialsample', component: MaterialSampleComponent},
  { path: 'main', component: MaterialSampleComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
