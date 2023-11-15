import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCoffeeComponent } from './random-coffee.component';

describe('RandomCoffeeComponent', () => {
  let component: RandomCoffeeComponent;
  let fixture: ComponentFixture<RandomCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCoffeeComponent]
    });
    fixture = TestBed.createComponent(RandomCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
