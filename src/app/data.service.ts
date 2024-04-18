
import { Injectable } from '@angular/core';


// src/app/data.service.ts

export interface User {
  
  time: string;
  phoneNumber: string;
  date: string;
  NoOfPeople: string;
  name: string;
  location: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private static users: User[] = [];

  constructor() {}

  addUser(user: User): void {
    DataService.users.push(user);
  }

  getUsers(): User[] {
    return DataService.users;
  }
}


