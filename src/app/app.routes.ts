import { Routes } from '@angular/router';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { AssignationComponent } from './components/assignation/assignation.component';

export const routes: Routes = [
    
    { path: 'classrooms', component: ClassroomComponent },
    { path: 'inscripciones', component: AssignationComponent },

];
