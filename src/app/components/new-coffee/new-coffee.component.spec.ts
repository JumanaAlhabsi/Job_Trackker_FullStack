import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoffeeComponent } from './new-coffee.component';

describe('NewCoffeeComponent', () => {
  let component: NewCoffeeComponent;
  let fixture: ComponentFixture<NewCoffeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCoffeeComponent]
    });
    fixture = TestBed.createComponent(NewCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
