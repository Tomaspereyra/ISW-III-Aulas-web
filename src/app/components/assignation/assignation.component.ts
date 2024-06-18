import { Component, NgModule } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ClassroomService } from '../../services/classroom.service';
import { Assignation } from './assignation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assignation.component.html',
  styleUrl: './assignation.component.scss'
})
export class AssignationComponent {
  inscriptions: any[] = [];
  classrooms: any[] = [];
  selectedSubject: any;
  selectedClassroom: any;
  selectedTime: any;
  totalStudents: any;
  assignation: Assignation | undefined;
  asignacionCorrecta: boolean = false;
  error:boolean = false;
  constructor(private inscriptionService: InscriptionService, private classroomService: ClassroomService, private http: HttpClient) { }


  ngOnInit(): void {
    this.inscriptionService.getInscriptions()
      .subscribe(data => {
        this.inscriptions = data;
      });

    this.classroomService.getClassrooms().subscribe(
      data => {
        this.classrooms = data;
      }
    );


  }

  onSubjectChange() {
    console.log(this.selectedSubject);
    const inscription = this.inscriptions.find(i => i.subjectId == this.selectedSubject);
    console.log(inscription);
    this.totalStudents = inscription.studentsIds.length;
  }
  onSubmit() {
    const inscription = this.inscriptions.find(i => i.subjectId == this.selectedSubject);
    this.assignation = new Assignation(this.selectedClassroom, inscription.subjectId, inscription.studentsIds);
    console.log(this.assignation);
 
    this.http.post('http://localhost:8080/assignation', this.assignation)
      .subscribe(response => {
        console.log('Datos enviados correctamente', response);
        this.asignacionCorrecta = true;
        setTimeout(() => {
          this.asignacionCorrecta = false;
        }, 5000); // 5 segundos
      }, error => {
        this.error =true 
        setTimeout(() => {
          this.error = false;
        }, 5000); // 5 segundos
      });
  }


}
