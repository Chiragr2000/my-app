import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPipesComponent } from './directives-pipes.component';

describe('DirectivesPipesComponent', () => {
  let component: DirectivesPipesComponent;
  let fixture: ComponentFixture<DirectivesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
