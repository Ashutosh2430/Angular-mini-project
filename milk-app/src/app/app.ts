import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = '';
  age: number | null = null;
  phone = '';
  milkType = '';

  customers: any[] = [];

  constructor() {
    const savedData = localStorage.getItem('customers');

    if (savedData) {
      this.customers = JSON.parse(savedData);
    }
  }

  saveData() {

    const customer = {
      name: this.name,
      age: this.age,
      phone: this.phone,
      milkType: this.milkType
    };

    this.customers.push(customer);

    localStorage.setItem('customers', JSON.stringify(this.customers));

    this.name = '';
    this.age = null;
    this.phone = '';
    this.milkType = '';
  }
}