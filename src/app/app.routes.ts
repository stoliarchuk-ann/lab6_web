import { Routes } from '@angular/router';
import { ArrayOneComponent } from './array-one/array-one';
import { Lab6 } from './lab6/lab6';
import { ArrayTwo } from './array-two/array-two';

export const routes: Routes = [
    { path: "", redirectTo: "lab6", pathMatch: "full" },
    { path: "lab6", component: Lab6 },
    { path: "array-one", component: ArrayOneComponent },
    { path: "array-two", component: ArrayTwo },
];