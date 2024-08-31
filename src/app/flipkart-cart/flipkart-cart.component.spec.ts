import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartCartComponent } from './flipkart-cart.component';

describe('FlipkartCartComponent', () => {
  let component: FlipkartCartComponent;
  let fixture: ComponentFixture<FlipkartCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
