import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipesStartComponent } from './receipes-start.component';

describe('ReceipesStartComponent', () => {
  let component: ReceipesStartComponent;
  let fixture: ComponentFixture<ReceipesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipesStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
