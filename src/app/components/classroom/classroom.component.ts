import { Component } from '@angular/core';
import { ClassroomService } from '../../services/classroom.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent {
  classrooms: any[] = [];

  constructor(private classroomService: ClassroomService) { }


  ngOnInit(): void {
    this.classroomService.getClassrooms()
      .subscribe(data => {
        this.classrooms = data;
      });
  }
}
