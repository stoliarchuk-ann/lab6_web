import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayOne } from './array-one';

describe('ArrayOne', () => {
  let component: ArrayOne;
  let fixture: ComponentFixture<ArrayOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOne],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
