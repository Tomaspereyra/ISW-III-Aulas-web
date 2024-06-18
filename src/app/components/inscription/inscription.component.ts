import { Component } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  inscriptions: any[] = [];

  constructor(private inscriptionService: InscriptionService) { }


  ngOnInit(): void {
    this.inscriptionService.getInscriptions()
      .subscribe(data => {
        this.inscriptions = data;
      });
  }
}
