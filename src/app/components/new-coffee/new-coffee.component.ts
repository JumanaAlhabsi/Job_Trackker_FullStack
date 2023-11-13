import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-new-coffee',
  templateUrl: './new-coffee.component.html',
  styleUrls: ['./new-coffee.component.css']
})
export class NewCoffeeComponent {
  newCoffee: any=[];
  coffeeCreated: boolean = false;

  coffeeForm: FormGroup;
  nameInput: FormControl;
  taglineInput: FormControl;
  descriptionInput: FormControl;
  first_roastedInput: FormControl;
  roaster_tipsInput: FormControl;
  strength_levelInput: FormControl;
  contributed_byInput: FormControl;

  constructor(private coffeeService: CoffeeService) {
    this.nameInput = new FormControl("", Validators.required);
    this.taglineInput = new FormControl("", Validators.required);
    this.descriptionInput = new FormControl("", Validators.required);
    this.first_roastedInput = new FormControl("", Validators.required);
    this.roaster_tipsInput = new FormControl("", Validators.required);
    this.strength_levelInput = new FormControl("", Validators.required);
    this.contributed_byInput = new FormControl("", Validators.required);

    this.coffeeForm = new FormGroup({
      name: this.nameInput,
      tagline: this.taglineInput,
      description: this.descriptionInput,
      first_roasted: this.first_roastedInput,
      roaster_tips: this.roaster_tipsInput,
      strength_level: this.strength_levelInput,
      contributed_by: this.contributed_byInput
    });
  }

  createCoffee(): void {
    const coffeeData = this.coffeeForm.value; // Use form value to get the entered data
    this.coffeeService.createCoffee(coffeeData).subscribe({
      next: (response) => {
        console.log('New coffee created successfully:', response);
        this.coffeeForm.reset(); // Reset the form after successful creation
      },
      error: (error) => {
        console.error('Error creating coffee:', error);
      },
      complete: () => {
        console.log('Create coffee operation completed');
      }
    });
  }
}