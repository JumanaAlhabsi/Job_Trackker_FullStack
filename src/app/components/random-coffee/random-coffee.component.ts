import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit {
  randomCoffee: any;

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.fetchRandomCoffee();
  }

  fetchRandomCoffee(): void {
    this.coffeeService.getRandomCoffee().subscribe({
      next: (coffee) => {
        this.randomCoffee = coffee;
      },
      error: (error) => {
        console.error('Error fetching random coffee:', error);
      }
    });
  }
}
