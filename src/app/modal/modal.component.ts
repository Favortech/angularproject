import { Component } from '@angular/core';
import { ReservationsComponent } from '../reservations/reservations.component';
import { FormsModule } from '@angular/forms';
import { DataService, User } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReservationsComponent,FormsModule,CommonModule,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  users!: User[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  
  }

  onLoad(){
    this.users = this.dataService.getUsers();
  }

}


// src/app/user-list.component.ts


  