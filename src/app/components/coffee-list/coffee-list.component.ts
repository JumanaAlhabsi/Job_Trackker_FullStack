import { Component , OnInit} from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})

export class CoffeeListComponent implements OnInit {
  
  
  coffees!: any[];
  selectedCoffee: any;

  constructor(private coffeeService: CoffeeService, private router : Router) {}

  
  
  ngOnInit(): void {
    this.coffeeService.getAllCoffees().subscribe(
      (data) => {
        this.coffees = data;
        console.log('Coffees data:', this.coffees); // Log the data to understand its structure
        
      },
      (error) => {
        console.error('Error fetching coffees:', error);
        
      }
    );
  }

  
  // this.router.navigate(['/coffees', coffee.id]);
  onSelect(coffee: any): void {
    this.selectedCoffee = coffee;
    this.router.navigate(['/coffees', coffee._id]);
}
}