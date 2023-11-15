import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.css']
})
export class SingleCoffeeComponent {
  coffee: any;

  constructor(
    private route: ActivatedRoute,
    private coffeeService: CoffeeService,
    private router: Router
  ) {
    // Add a console.log to check if the constructor is being called
    console.log('SingleCoffeeComponent constructor called');

    // Extract the coffeeId from the route parameter
    const coffeeId = this.route.snapshot.paramMap.get('id');
    console.log('Received coffeeId:', coffeeId); // Log the received coffeeId

    // Check if coffeeId is not null before making the API call
    if (coffeeId) {
      // Use the CoffeeService to get the coffee details by id
      this.coffeeService.getCoffeeById(coffeeId).subscribe(
        // Success callback
        (data: any) => {
          this.coffee = data;
        },
        // Error callback
        (error: any) => {
          console.error('Error fetching coffee details', error);
        }
      );
    } else {
      // Navigate to the error page if coffeeId is null
      this.router.navigate(['/error']);
    }
  }

  // Method to navigate back to the coffee list page
  goToCoffeeList(): void {
    // Add a console.log to check if this method is being called
    console.log('Navigating back to Coffee List');
    this.router.navigate(['/coffees']);
  }
}
