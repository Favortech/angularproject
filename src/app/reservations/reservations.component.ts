import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SecondPageComponent } from '../second-page/second-page.component';
import { restaurant_locations } from '../locations/restaurant_locations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { DataService, User } from '../data.service';

@Component({
  standalone: true,
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  imports: [SecondPageComponent, CommonModule, FormsModule, ModalComponent],
})
export class ReservationsComponent implements OnInit {

  @ViewChild(ModalComponent, {static: true}) modalPage: ModalComponent | undefined
  timeCounter: number = 0;
  pageNum = 1;
  
  reservationTitle = 'Reservations';

  restaurant_locations = restaurant_locations;

  name!: string;
  time!: string;
  phoneNumber!: string;
  date!: string;
  NoOfPeople!: string;
  location!: string;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
  }

  submitForm(): void {
    const user: User = {
      name: this.name,
      time: this.time,
      phoneNumber: this.phoneNumber,
      date: this.date,
      NoOfPeople: this.NoOfPeople,
      location: this.location
    };

    this.dataService.addUser(user);

    this.name = '';
    this.time = '';
    this.phoneNumber = '';
    this.date = '';      
    this.NoOfPeople = '';
    this.location = '';
    this.modalPage?.onLoad();
  }
}

 
