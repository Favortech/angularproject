import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservationsComponent } from '../reservations/reservations.component';

@Component({
  standalone: true,
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  imports: [CommonModule, FormsModule,ReservationsComponent],
})
export class SecondPageComponent implements OnInit {
  @Input() name: any;
  @Input() time: any;
  @Input() city: any;
  @Input() date: any;
  @Input() phonenumber: any;
  @Input() noOfpeople: any;
  confirm = 'confirmation';

  constructor() {}

  ngOnInit(): void {}
  pushedData: any[] = [];

  pushDataToNewInterface(formData: any) {
    this.pushedData.push(formData);
  }
  //for using the "new reservations" button to go back to page 1
}
