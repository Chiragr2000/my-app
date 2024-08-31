import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonCartComponent } from './amazon-cart.component';

describe('AmazonCartComponent', () => {
  let component: AmazonCartComponent;
  let fixture: ComponentFixture<AmazonCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
