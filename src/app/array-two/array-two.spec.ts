import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayTwo } from './array-two';

describe('ArrayTwo', () => {
  let component: ArrayTwo;
  let fixture: ComponentFixture<ArrayTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
