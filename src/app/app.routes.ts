import { Routes } from '@angular/router';
import { AnimalComponent } from './components/animal-component/animal-component';

export const routes: Routes = [ //rutas de la aplicacion de angular no de la api de express
    { path: 'inicio', component: AnimalComponent }
    //{path: 'animales', component: AnimalComponent}
];
